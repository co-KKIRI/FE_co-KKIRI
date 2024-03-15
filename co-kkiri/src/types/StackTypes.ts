type StackPosition = "FRONT_END" | "BACK_END" | "MOBILE" | "OTHERS"

type Stack = {
    name: string;
    img: string;
    relatedPosition: Array<StackPosition>;
};

// type FilteredStacks<T extends StackPosition | "ALL"> = [
//     T extends StackPosition ? 
// ]

