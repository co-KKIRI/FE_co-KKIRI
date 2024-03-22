export type StackPosition = "FRONT_END" | "BACK_END" | "MOBILE" | "OTHERS"

export type Stack = {
    name: string;
    img: string;
    relatedPosition: Array<StackPosition>;
};

export type Stacks = {
    [key: string]: Stack;
};
