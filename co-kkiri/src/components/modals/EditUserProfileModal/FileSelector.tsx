import DESIGN_TOKEN from "@/styles/tokens";
import { Image } from "@/types/ImageTypes";
import { ChangeEvent, KeyboardEvent, MouseEvent, useRef } from "react";
import styled from "styled-components";

interface FileSelectorProps {
  name: string;
  type: "file" | "image";
  isMultiple?: boolean;
  onChange: (file: File | FileList) => void;
  icon: Image;
  className?: string;
}

export default function FileSelector({ name, type, isMultiple, onChange, icon, className }: FileSelectorProps) {
  const InputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    if (!InputRef.current) return;

    InputRef.current.click();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      if (isMultiple) onChange(files);
      else onChange(files[0]);
    }
  };


  return (
    <Container className={className} onClick={onClickHandler}>
      <FileInput
        name={name}
        type="file"
        ref={InputRef}
        onChange={onChangeHandler}
        accept={type === "image" ? "image/*" : undefined}
      />
      <FileIcon src={icon.src} alt={icon.alt} />
    </Container>
  );
}

const { color } = DESIGN_TOKEN;

const Container = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-radius: 9999rem;
  border: 0.1rem solid ${color.gray[2]};
  background-color: ${color.white};

  &:hover {
    cursor: pointer;
  }
`;

const FileIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const FileInput = styled.input`
  display: none;
`;
