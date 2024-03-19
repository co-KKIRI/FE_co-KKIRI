import Textarea from "@/components/commons/Textarea";
import { ChangeEvent } from "react";

interface CommentTextareaProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export default function CommentTextarea({ value, onChange, className }: CommentTextareaProps) {
  return (
    <Textarea className={className} type="comment" placeholder="댓글을 입력하세요." value={value} onChange={onChange} />
  );
}
