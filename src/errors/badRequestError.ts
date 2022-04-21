import { BaseError } from './baseError';
import { HttpStatus } from '../common/const';

class BadRequestError extends BaseError {
  constructor(message?: string) {
    super(HttpStatus.BadRequest.status);
    this.message = message || HttpStatus.BadRequest.message;
  }
}

export { BadRequestError };
