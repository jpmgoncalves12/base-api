import validator from 'validator';

export function nameValidation(
  data: string,
): boolean {
  const minimun = 4;
  const maximum = 64;

  return validator.isLength(data, { min: minimun, max: maximum });
}

export function isEmailValidation(
  data: string,
): boolean {
  return validator.isEmail(data);
}

export function lengthValidation(
  data: string,
  minimun: number,
  maximum = undefined,
): boolean {
  return validator.isLength(data, { min: minimun, max: maximum });
}
