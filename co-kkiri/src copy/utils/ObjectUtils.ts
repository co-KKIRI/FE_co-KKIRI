/**
 * 주어진 값에 해당하는 키를 매핑된 필터 객체에서 찾습니다.
 *
 * 이 함수는 `mappedFilter` 객체에서 주어진 `value`에 해당하는 키를 찾아 반환합니다.
 * 만약 해당하는 키가 없을 경우, 에러를 발생시킵니다. 이는 `mappedFilter` 내에서
 * 주어진 `value`를 가진 키가 반드시 존재해야 함을 의미합니다.
 *
 * @template Filter - `mappedFilter` 객체의 키 타입을 제한하는 제네릭 타입.
 *                     이 타입은 `string` 이나 `string literal union type`이어야합니다.
 *
 * @param { [x in Filter]: string } mappedFilter - 키와 값을 매핑하는 객체.
 *                                                이 객체의 키는 `Filter` 타입을, 값은 `string` 타입을 가집니다.
 * @param {string} value - 찾고자 하는 값. 이 값에 해당하는 키를 `mappedFilter` 객체에서 찾습니다.
 *
 * @returns {Filter} - `mappedFilter` 객체 내에서 `value`에 해당하는 키를 반환합니다.
 *
 * @throws {Error} - 주어진 `value`를 가진 키가 `mappedFilter` 내에 없을 경우 발생하는 에러.
 */
export function getFilterKey<Filter extends string>(mappedFilter: { [x in Filter]: string }, value: string) {
  const result = Object.keys(mappedFilter).find((key) => mappedFilter[key as Filter] === value);

  if (!result) throw Error(`value:${value}를 가진 key가 ${JSON.stringify(mappedFilter)}내에 없습니다`);

  return result;
}
