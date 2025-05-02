export const handleSuccess = <
  T extends {
    events?: any;
    data?: unknown;
    message: string | null;
  },
>(
  data: T
) => {
  return {
    data,
    statusCode: 200,
    status: 'success',
  };
};
