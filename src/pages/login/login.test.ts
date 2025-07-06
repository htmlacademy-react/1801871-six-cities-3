import { describe, it, expect } from 'vitest';

function isFieldsValid(login: string, password: string): boolean {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return passwordRegex.test(password) && emailRegex.test(login);
}

describe('isFieldsValid()', () => {
  it('должна вернуть true для валидных email и пароля', () => {
    expect(isFieldsValid('user@example.com', 'abc123')).toBe(true);
    expect(isFieldsValid('test@mail.ru', 'A1b2c3')).toBe(true);
  });

  it('должна вернуть false если нет цифры в пароле', () => {
    expect(isFieldsValid('user@example.com', 'abcdef')).toBe(false);
  });

  it('должна вернуть false если нет буквы в пароле', () => {
    expect(isFieldsValid('user@example.com', '123456')).toBe(false);
  });

  it('должна вернуть false для невалидного email', () => {
    expect(isFieldsValid('invalid-email', 'abc123')).toBe(false);
    expect(isFieldsValid('user@.com', 'abc123')).toBe(false);
  });

  it('должна вернуть false если оба значения невалидны', () => {
    expect(isFieldsValid('invalid', '123')).toBe(false);
  });
});