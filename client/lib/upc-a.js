export const CODE_LENGTH = 12

export const ALL_DIGITS = /^\d+$/

export const normalizedValue = (value) => {
  const { length } = value
  const systemDigitMissing = !value.startsWith('0')

  return length == CODE_LENGTH - 1 && systemDigitMissing ? '0' + value : value
}
