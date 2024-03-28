import { ChangeEvent, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./CustomToolbar";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

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

export default function QuillEditor({ onChange, value }: { onChange: (value: string) => void; value: string }) {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);

  return (
    <>
      <CustomToolbar />
      <ReactQuillWrapper>
        <ReactQuill
          value={value}
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={onChange}
          className="custom-quill-editor"
          placeholder="프로젝트를 소개해주세요!"
        />
      </ReactQuillWrapper>
    </>
  );
}
const { color, typography, mediaQueries } = DESIGN_TOKEN;

const ReactQuillWrapper = styled.div`
  .ql-container {
    height: 75.2rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: 0.1rem solid ${color.gray[2]};
    border-top: none;

    ${mediaQueries.mobile} {
      height: 39.7rem;
    }
  }

  .ql-editor.ql-blank::before {
    color: ${color.gray[1]};
    font-style: normal;
    ${typography.font16Semibold};
  }
`;
