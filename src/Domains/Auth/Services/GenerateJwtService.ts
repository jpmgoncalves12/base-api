import { sign, SignOptions } from 'jsonwebtoken';
import getToken from '../../../Configs/TokenConfig';

export default function generateJwtService(
  payload: object,
): false | string {
  const token = getToken();

  if (!token) {
    return false;
  }

  const signInOptions: SignOptions = {
    expiresIn: '3h',
  };

  // Todo: needs to encripty payload
  return sign(payload, token, signInOptions);
}
