import { handleError, handleSuccess } from './index';

type AsyncFunction<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

/**
 * A wrapper for async functions that handles try/catch automatically
 * and applies the appropriate success/error handlers
 *
 * @param fn - The async function to wrap
 * @returns A function that handles errors and success automatically
 */
export const asyncHandler = <TArgs extends any[], TReturn>(
  fn: AsyncFunction<TArgs, TReturn>
) => {
  return async (...args: TArgs) => {
    try {
      const result = await fn(...args);

      // If the result is already formatted with status, return it as is
      if (result && typeof result === 'object' && 'status' in result) {
        return result;
      }

      // Otherwise wrap the result in a success handler
      return handleSuccess({
        data: result,
        message: null,
      });
    } catch (error) {
      return handleError(error);
    }
  };
};
