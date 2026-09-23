import type React from 'react';

export const formatPhoneInput = (input: string): string => {
  if (!input) return '';

  // If user clears to just '+' or '+7' or empty
  if (input === '+' || input === '+7' || input === '7' || input === '8') {
    return '';
  }

  // Strip all non-digit characters
  let digits = input.replace(/\D/g, '');

  if (!digits) {
    return '';
  }

  // Normalize leading country code: replace initial 8 or 7 with 7
  if (digits[0] === '8' || digits[0] === '7') {
    digits = '7' + digits.slice(1);
  } else {
    digits = '7' + digits;
  }

  // Max 11 digits: 7 (country code) + 10 digits
  digits = digits.slice(0, 11);

  if (digits.length === 1) {
    return '+7 ';
  }

  let formatted = '+7 (' + digits.slice(1, Math.min(4, digits.length));

  if (digits.length > 4) {
    formatted += ') ' + digits.slice(4, Math.min(7, digits.length));
  } else if (digits.length === 4 && !input.endsWith(')')) {
    formatted += ') ';
  }

  if (digits.length > 7) {
    formatted += '-' + digits.slice(7, Math.min(9, digits.length));
  } else if (digits.length === 7 && !input.endsWith('-')) {
    formatted += '-';
  }

  if (digits.length > 9) {
    formatted += '-' + digits.slice(9, 11);
  } else if (digits.length === 9 && !input.endsWith('-')) {
    formatted += '-';
  }

  return formatted;
};

export const handlePhoneFocus = (
  phone: string,
  setPhone: (val: string) => void
) => {
  if (!phone || phone.trim() === '') {
    setPhone('+7 ');
  }
};

export const handlePhoneBlur = (
  phone: string,
  setPhone: (val: string) => void
) => {
  // If user focused and left without entering subscriber digits
  if (
    phone === '+7 ' ||
    phone === '+7' ||
    phone === '+7 (' ||
    phone === '+' ||
    phone.trim() === ''
  ) {
    setPhone('');
  }
};

export const handlePhoneKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  phone: string,
  setPhone: (val: string) => void
) => {
  // If backspace is pressed when value is '+7 ' or '+7', completely clear
  if (e.key === 'Backspace' && (phone === '+7 ' || phone === '+7' || phone === '+7 (')) {
    e.preventDefault();
    setPhone('');
  }
};
