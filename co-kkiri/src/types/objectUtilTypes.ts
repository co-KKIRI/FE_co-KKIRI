/** 객체에서 특정 Property의 Type을 추출하는 타입입니다 
 * 
 * @example
    type A = {
        label: string;
        content: string | string[];
        renderType: RenderType;
    }

    const a:GetTypeFromObject<A, "content"> = "hello"; // string | string[]
 * 
*/
export type GetTypeFromObject<O, ObjectPropertyType extends PropertyKey> = O extends {
  [key in ObjectPropertyType]: infer ValueType;
}
  ? ValueType
  : never;

/** 객체의 key들을 기반으로 setter들을 담은 객체 타입을 만드는 타입입니다 
 * 
 * @example
    type A = {
        label: string;
        content: string | string[];
        renderType: RenderType;
    }

    type AAction = SetterFromState<A>;
    
    위 코드는 아래와 일치합니다

    type AAction = {
      setLabel: (value: string) => void,
      setContent: (value: string | string[]) => void,
      setRenderType: (value: RenderType) => void,
    }
 * 
*/
export type SetterFromState<T extends object> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};
