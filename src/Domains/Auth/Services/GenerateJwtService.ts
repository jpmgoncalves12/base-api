import { sign, SignOptions } from 'jsonwebtoken';
import getToken from '../../../Configs/TokenConfig';

export default function generateJwtService(
  payload: object,
) {
  const token = getToken();

  if (!token) {
    return '';
  }

  const signInOptions: SignOptions = {
    expiresIn: '3h',
  };

  // Todo: needs to encripty payload
  return sign(payload, token, signInOptions);
}
