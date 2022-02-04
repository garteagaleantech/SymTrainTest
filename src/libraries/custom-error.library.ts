export class CustomError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);

    this.status = status;
  }

  getError(): ErrorResponse {
    return {
      message: this.message,
      status: this.status
    };
  }
}
