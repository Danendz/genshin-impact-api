import type { ApiError, ApiSuccess } from '@shared/types/api_responses';

export const fn_api_success_message = (data: unknown): ApiSuccess => ({
  type: 'success',
  data
});

export const fn_api_error_message = (message: string): ApiError => ({
  type: 'error',
  message
});
