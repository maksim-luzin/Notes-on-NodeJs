import { BaseError } from './baseError';
import { HttpStatus } from '../common/const';

class InternalServerError extends BaseError {
  constructor(message?: string) {
    super(HttpStatus.InternalServerError.status);
    this.message = message || HttpStatus.InternalServerError.message;
  }
}

export { InternalServerError };
