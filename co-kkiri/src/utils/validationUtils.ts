export function isValidHexColor(color: string): boolean {
  return /^#[0-9A-F]{6}$/i.test(color);
}

/**
 * 주어진 값이 '비어 있는' 상태인지 여부를 확인합니다.
 *
 * 이 함수는 다음과 같은 경우에 '비어 있음'으로 간주합니다:
 * - 객체가 `null`이거나 키가 없는 경우
 * - 배열의 길이가 0인 경우
 * - 문자열이 빈 문자열이거나 공백만 있는 경우
 * - 값이 'falsy' 값이지만, `0`은 '비어 있지 않음'으로 처리합니다 (예: `false`, `undefined`, `NaN`은 '비어 있음'으로 간주).
 *
 * 이 함수는 폼 입력값 검사, 데이터 처리 로직 등에서 특정 값의 존재 여부를 확인할 때 유용하게 사용될 수 있습니다.
 *
 * @template T - 함수가 처리할 수 있는 값의 타입입니다.
 *
 * @param {T} value - 확인하고자 하는 값. `string`, `object`, `number`, `boolean`, `null`, `undefined` 등 다양한 타입을 받을 수 있습니다.
 *
 * @returns {boolean} - 값이 '비어 있는' 경우 `true`, 그렇지 않은 경우 `false`를 반환합니다.
 *
 * @example
 * // 문자열이 비어있는 경우
 * console.log(isEmptyValue("")); // true
 *
 * // 객체가 비어있는 경우
 * console.log(isEmptyValue({})); // true
 *
 * // 숫자 0은 '비어 있지 않음'으로 처리
 * console.log(isEmptyValue(0)); // false
 *
 * // null은 '비어 있음'으로 처리
 * console.log(isEmptyValue(null)); // true
 */
export function isEmptyValue<T>(value: T): boolean {
  // 객체나 배열이 비어 있는지 확인
  if (typeof value === "object" && (value === null || Object.keys(value).length === 0)) {
    return true;
  }

  // 문자열이 비어있는지 확인
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  // 값이 'falsy'이지만, 숫자 0은 예외로 처리
  if (!value && value !== 0) {
    return true;
  }

  return false;
}

export const getEmailLink = (email: string): string => {
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailReg.test(email)) {
    throw new Error("Invalid email address");
  }

  return `mailto:${email}`;
};
