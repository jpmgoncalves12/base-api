import dotenv from 'dotenv';

dotenv.config();

export default function getToken() {
  return process.env.SECRET ?? '';
}
