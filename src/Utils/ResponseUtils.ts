import { Response } from 'express';

export function formatResponseSuccess(
  res: Response,
  data: string | object,
  message = 'Success',
  status = 200,
) {
  const responseData = {
    message,
    data,
  };

  return res.status(status).send(
    JSON.stringify(responseData),
  );
}

export function formatResponseError(
  res: Response,
  message: string,
  status = 422,
) {
  const responseData = { error: message };

  return res.status(status).send(
    JSON.stringify(responseData),
  );
}
