import { useMemo, useState } from "react";
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

export default function QuillEditor() {
  const [values, setValues] = useState("");

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);
  console.log(values);
  return (
    <Container>
      <CustomToolbar />
      <ReactQuillWrapper>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={values}
          onChange={setValues}
          className="custom-quill-editor"
          placeholder="프로젝트를 소개해주세요!"
        />
      </ReactQuillWrapper>
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  width: 77.3rem;
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
