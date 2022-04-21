class BaseError extends Error {
  status: number
  constructor(status: number) {
    super();
    this.status = status;
  }
}

export { BaseError };
