export interface DashBoardResponse<T> {
  statusCode: number,
  message: string,
  response: T,
};
