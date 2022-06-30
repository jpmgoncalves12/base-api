import { sign } from 'jsonwebtoken';
import getToken from '../../../Configs/TokenConfig';

export default function generateJwtService(
  payload: object,
) {
  const token = getToken();

  return sign(payload, token) ?? '';
}
