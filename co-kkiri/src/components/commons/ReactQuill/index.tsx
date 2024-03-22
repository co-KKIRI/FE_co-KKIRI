import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./CustomToolbar";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "list",
  "link",
  "align",
  "color",
  "background",
  "image",
];

export default function QuillEditor({
  setSelectedOption,
}: {
  setSelectedOption: React.Dispatch<React.SetStateAction<RecruitmentRequest>>;
}) {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      title: e.target.value,
    }));
  };

  const handleContentChange = (content: string) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      content: content,
    }));
  };

  return (
    <Container>
      <input placeholder="제목을 입력해주세요!" onChange={handleTitleChange} />
      <CustomToolbar />
      <ReactQuillWrapper>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={handleContentChange}
          className="custom-quill-editor"
          placeholder="프로젝트를 소개해주세요!"
        />
      </ReactQuillWrapper>
    </Container>
  );
}
const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & input {
    height: 4.8rem;
    border: 0.1rem solid ${color.gray[2]};
    border-radius: 0.5rem;
    padding: 0 1.885rem;
    margin-bottom: 1.2rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      ${typography.font16Semibold};
      color: ${color.gray[1]};
    }
  }
`;

const ReactQuillWrapper = styled.div`
  .ql-container {
    height: 80rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: 0.1rem solid ${color.gray[2]};
    border-top: none;
  }

  .ql-editor.ql-blank::before {
    color: ${color.gray[1]};
    font-style: normal;
    ${typography.font16Semibold};
  }
`;
