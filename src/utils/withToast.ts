import { ApiResponse } from '@/types/commons';
import { toast } from 'sonner';

export const withLoadingToast = <
  T extends (...args: any[]) => Promise<ApiResponse>,
>(
  fn: T,
  {
    loadingMessage = 'Loading...',
    successMessage = 'Success!',
    errorMessage = 'Something went wrong',
  } = {}
) => {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const toastId = toast.loading(loadingMessage);

    try {
      const result = await fn(...args);
      toast.dismiss(toastId);

      if (result.status === 'success') {
        toast.success(result.message || successMessage);
      } else {
        console.error(result);

        toast.error(result.message || errorMessage);
      }

      return result as ReturnType<T>;
    } catch (error) {
      toast.dismiss(toastId);

      console.error(error);

      const errorMsg =
        error instanceof Error
          ? error.message
          : (error as any)?.message || errorMessage;

      toast.error(errorMsg);

      throw error;
    }
  };
};
