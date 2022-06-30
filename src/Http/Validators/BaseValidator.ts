import validator from 'validator';

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
