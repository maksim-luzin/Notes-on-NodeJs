const HttpStatus = {
  BadRequest: {
    status: 400,
    message: 'Bad Request'
  },
  NotFound: {
    status: 404,
    message: 'Not Found'
  },
  InternalServerError: {
    status: 500,
    message: 'Internal Server Error'
  },
  Unauthorized: {
    status: 401,
    message: 'Unauthorized'
  }
};

export { HttpStatus }
