export default function ulidJWTDecode(
  jwt: string,
): string {
  const tokens = jwt.split('.');

  const convertedUser = Buffer.from(tokens[1], 'base64').toString('utf8');
  const { ulid } = JSON.parse(convertedUser).user;

  return ulid ?? '';
}
