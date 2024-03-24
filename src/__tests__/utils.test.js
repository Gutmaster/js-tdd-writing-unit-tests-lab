import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("checks whether a given word is a palindrome", () => {
    const word = 'racecar'
    expect(isPalindrome(word)).toBe(true)
  });

  it("checks whether a given word is a palindrome", () => {
    const word = 'car'
    expect(isPalindrome(word)).toBe(false)
  });

  it("checks whether a given word is a palindrome", () => {
    const word = ''
    expect(isPalindrome(word)).toBe(false)
  });

  it('throws on invalid characters', () => {
    const word = '$#9glib2=_-?-_=2bilg9#$'
    expect(() => isPalindrome(word)).toThrow();
  });

  it('throws on non string arguments', () => {
    const word = 42
    expect(() => isPalindrome(word)).toThrow();
  });
});

