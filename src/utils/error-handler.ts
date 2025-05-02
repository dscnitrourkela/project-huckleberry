export class EventOperationError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'EventOperationError';
  }
}

export const handleError = (error: unknown) => {
  console.error('Operation failed:', error);

  if (error instanceof EventOperationError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
      status: 'error',
    };
  }

  return {
    message: 'An unexpected error occurred',
    statusCode: 500,
    status: 'error',
  };
};
