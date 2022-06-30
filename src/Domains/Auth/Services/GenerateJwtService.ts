import { sign } from 'jsonwebtoken';
import getToken from '../../../Configs/TokenConfig';

export default function generateJwtService(
  payload: object,
) {
  const token = getToken();

  if (!token) {
    return '';
  }

  // Todo: needs to encripty payload
  return sign(payload, token);
}
