import { sign, SignOptions } from 'jsonwebtoken';
import { getToken } from '../../../Configs/TokenConfig'

export function generateJwtService(
	payload: object
) {
	const token = getToken();

	return sign(payload, token) ?? '';
};
