export interface ITaskStatus{
    status: TaskStatus
}

enum TaskStatus {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    CANCELED
  }