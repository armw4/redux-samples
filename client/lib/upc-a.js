export const CODE_LENGTH = 12

export const ALL_DIGITS = /^\d+$/

export const normalizedValue = (value) => {
  const { length } = value
  const systemDigitMissing = !value.startsWith('0')

  return length == CODE_LENGTH - 1 && systemDigitMissing ? '0' + value : value
}

export const passesCheckDigitVerification = (value) => {
  const digits = value.split('')
  const targetCheckDigit = parseInt(digits[CODE_LENGTH - 1], 10)
  const targetDigits = digits.slice(0, CODE_LENGTH - 1)

  const sum = targetDigits.reduce(function(total, digit, index) {
    const isOneBasedOddPositionedNumber = index % 2 === 0
    const parsedDigit = parseInt(digit, 10)

    return total + (isOneBasedOddPositionedNumber ? parsedDigit * 3 : parsedDigit)
  }, 0)

  const sumModTen = sum % 10
  const checkDigit = sumModTen === 0 ? sumModTen : 10 - sumModTen

  return checkDigit === targetCheckDigit
}
