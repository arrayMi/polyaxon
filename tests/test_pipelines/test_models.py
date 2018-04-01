from datetime import timedelta

from django.conf import settings
from django.utils import timezone

from factories.pipelines import OperationFactory, PipelineFactory, PipelineRunFactory, \
    OperationRunFactory
from tests.utils import BaseTest


class TestPipelineModel(BaseTest):
    def test_dag_property(self):
        pipeline = PipelineFactory()
        operations = [OperationFactory(pipeline=pipeline) for _ in range(4)]
        operations[0].upstream_operations.set(operations[2:])
        operations[1].upstream_operations.set(operations[2:])
        operation_by_ids = {op.id: op for op in operations}
        assert pipeline.dag == (
            {
                operations[0].id: set(),
                operations[1].id: set(),
                operations[2].id: {operations[0].id, operations[1].id},
                operations[3].id: {operations[0].id, operations[1].id},
            },
            operation_by_ids
        )

        # Add operations outside the dag
        operation1 = OperationFactory()
        operation1.downstream_operations.set([operations[1], operations[2], operations[3]])

        operation2 = OperationFactory()
        operation2.upstream_operations.set([operations[0], operations[2]])

        assert pipeline.dag == (
            {
                operations[0].id: {operation2.id, },
                operations[1].id: set(),
                operations[2].id: {operations[0].id, operations[1].id, operation2.id},
                operations[3].id: {operations[0].id, operations[1].id},
            },
            operation_by_ids
        )


class TestOperationModel(BaseTest):
    def test_get_countdown(self):
        operation = OperationFactory(retry_delay=5)
        assert operation.get_countdown(1) == 5
        assert operation.get_countdown(2) == 5

        # Test exponential backoff
        operation.retry_exponential_backoff = True
        operation.max_retry_delay = 24
        operation.save()
        assert operation.get_countdown(1) == 5
        assert operation.get_countdown(2) == 5
        assert operation.get_countdown(3) == 8
        assert operation.get_countdown(4) == 16
        assert operation.get_countdown(5) == 24  # Max retry delay

    def test_get_run_params(self):
        operation = OperationFactory()
        assert operation.get_run_params() == {}

        operation.celery_queue = 'dummy_queue'
        operation.save()
        assert operation.get_run_params() == {'queue': 'dummy_queue'}

        operation.timeout = 10
        operation.save()

        assert operation.get_run_params() == {
            'queue': 'dummy_queue',
            'soft_time_limit': 10,
            'time_limit': settings.CELERY_HARD_TIME_LIMIT_DELAY + 10,
        }

        operation.execute_at = timezone.now() + timedelta(hours=1)
        operation.save()
        assert operation.get_run_params() == {
            'queue': 'dummy_queue',
            'soft_time_limit': 10,
            'time_limit': settings.CELERY_HARD_TIME_LIMIT_DELAY + 10,
            'eta': operation.execute_at
        }


class TestPipelineRunModel(BaseTest):
    def test_dag_property(self):
        pipeline_run = PipelineRunFactory()
        operation_runs = [OperationRunFactory(pipeline_run=pipeline_run) for _ in range(4)]
        operation_runs[0].upstream_runs.set(operation_runs[2:])
        operation_runs[1].upstream_runs.set(operation_runs[2:])
        operation_by_ids = {op.id: op for op in operation_runs}
        assert pipeline_run.dag == (
            {
                operation_runs[0].id: set(),
                operation_runs[1].id: set(),
                operation_runs[2].id: {operation_runs[0].id, operation_runs[1].id},
                operation_runs[3].id: {operation_runs[0].id, operation_runs[1].id},
            },
            operation_by_ids
        )

        # Add operations outside the dag
        operation_run1 = OperationRunFactory()
        operation_run1.downstream_runs.set([operation_runs[1], operation_runs[2], operation_runs[3]])

        operation_run2 = OperationRunFactory()
        operation_run2.upstream_runs.set([operation_runs[0], operation_runs[2]])

        assert pipeline_run.dag == (
            {
                operation_runs[0].id: {operation_run2.id, },
                operation_runs[1].id: set(),
                operation_runs[2].id: {operation_runs[0].id, operation_runs[1].id, operation_run2.id},
                operation_runs[3].id: {operation_runs[0].id, operation_runs[1].id},
            },
            operation_by_ids
        )


class TestOperationRunModel(BaseTest):
    def test_trigger_policy(self):
        pass
