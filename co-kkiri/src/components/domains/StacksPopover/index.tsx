import FilterButton from "@/components/commons/FilterButton";
import { useState } from "react";
import SelectLayout from "./SelectLayout";

export default function StacksPopover() {
    const [isButtonSelected, setIsButtonSelected] = useState<boolean>(false);
    const handleButtonClick = () => {
        setIsButtonSelected(!isButtonSelected);
    }

    return (<div>
        <FilterButton selectOption="기술 스택" isSelected={isButtonSelected} onClick={handleButtonClick} />
        {isButtonSelected && <SelectLayout />}
    </div>
    )
}
