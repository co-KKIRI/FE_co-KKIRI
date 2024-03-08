import ReactDOM from "react-dom";

export const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, el as HTMLElement);
};
export default ModalPortal;
