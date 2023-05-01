export interface ApiSuccess {
  type: 'success',
  data: unknown
}

export interface ApiError {
  type: 'error',
  message: string
}
