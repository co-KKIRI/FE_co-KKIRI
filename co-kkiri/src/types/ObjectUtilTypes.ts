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
export type GetTypeFromObject<O, ObjectPropertyType extends PropertyKey> = O extends { [key in ObjectPropertyType]: infer ValueType } ? ValueType : never;
