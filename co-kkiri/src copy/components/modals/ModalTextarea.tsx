import Textarea from "../commons/Textarea";
import { ChangeEvent } from "react";

interface ModalTextareaProps {
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ModalTextarea({ id, value, onChange }: ModalTextareaProps) {
  return <Textarea id={id} type="modal" placeholder="내용을 입력하세요." value={value} onChange={onChange} />;
}
