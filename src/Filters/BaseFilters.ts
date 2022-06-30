import { Response } from 'express';

class BaseBusiness {
  formatResponseSuccess(
    res: Response,
    data: string,
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

  formatResponseError(
    res: Response,
    message: string,
    status = 422,
  ) {
    const responseData = { error: message };

    return res.status(status).send(
      JSON.stringify(responseData),
    );
  }
}

export default BaseBusiness;
