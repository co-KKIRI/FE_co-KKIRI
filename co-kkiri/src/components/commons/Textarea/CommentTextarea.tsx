import Textarea from ".";

interface CommentTextareaProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function CommentTextarea({ value, setValue }: CommentTextareaProps) {
  return (
    <Textarea
      type="comment"
      placeholder="댓글을 입력하세요."
      value={value || ""}
      onChange={(e) => setValue && setValue(e.target.value)}
    />
  );
}
