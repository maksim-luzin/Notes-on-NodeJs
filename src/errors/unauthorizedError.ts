import { BaseError } from './baseError';
import { HttpStatus } from '../common/const';

class UnauthorizedError extends BaseError {
  constructor(message?: string) {
    super(HttpStatus.Unauthorized.status);
    this.message = message || HttpStatus.Unauthorized.message;
  }
}

export { UnauthorizedError };
