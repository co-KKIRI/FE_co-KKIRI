import Textarea from ".";

interface ModalTextareaProps {
  id: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalTextarea({ id, value, setValue }: ModalTextareaProps) {
  return (
    <Textarea
      id={id}
      type="modal"
      placeholder="내용을 입력하세요."
      value={value || ""}
      onChange={(e) => setValue && setValue(e.target.value)}
    />
  );
}
