import { BaseError } from './baseError';
import { HttpStatus } from '../common/const';

class NotFoundError extends BaseError {
  constructor(message?: string) {
    super(HttpStatus.NotFound.status);
    this.message = message || HttpStatus.NotFound.message;
  }
}

export { NotFoundError };
