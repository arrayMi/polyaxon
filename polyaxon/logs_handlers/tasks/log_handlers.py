from logs_handlers.handlers import handle_build_job_logs, handle_experiment_job_log, handle_job_logs
from polyaxon.celery_api import celery_app
from polyaxon.settings import LogsCeleryTasks


@celery_app.task(name=LogsCeleryTasks.LOGS_HANDLE_EXPERIMENT_JOB, ignore_result=True)
def logs_handle_experiment_job(experiment_name, experiment_uuid, log_lines, temp=True):
    """Task handling for sidecars logs."""
    handle_experiment_job_log(experiment_name=experiment_name,
                              experiment_uuid=experiment_uuid,
                              log_lines=log_lines,
                              temp=temp)


@celery_app.task(name=LogsCeleryTasks.LOGS_HANDLE_JOB, ignore_result=True)
def logs_handle_job(job_uuid, job_name, log_lines, temp=True):
    """Task handling for sidecars logs."""
    handle_job_logs(job_uuid=job_uuid,
                    job_name=job_name,
                    log_lines=log_lines,
                    temp=temp)


@celery_app.task(name=LogsCeleryTasks.LOGS_HANDLE_BUILD_JOB, ignore_result=True)
def logs_handle_build_job(job_uuid, job_name, log_lines, temp=True):
    """Task handling for sidecars logs."""
    handle_build_job_logs(job_uuid=job_uuid,
                          job_name=job_name,
                          log_lines=log_lines,
                          temp=temp)
