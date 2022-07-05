import pbkdf2 from 'pbkdf2';
import dotenv from 'dotenv';

dotenv.config();

export default function encriptyPasswordService(
  password: string,
): string {
  const passwordSalt = process.env.PASSWORD_SECRET ?? '';
  if (!passwordSalt) {
    return '';
  }

  const key = pbkdf2.pbkdf2Sync(password, passwordSalt, 10, 32, 'sha512');

  return key.toString('hex');
}
