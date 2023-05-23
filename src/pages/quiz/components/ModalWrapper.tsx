import { ReactNode } from "react";
import cl from "../styles/modal-wrapper.module.css";

type Props = {
  children: ReactNode;
};

export const ModalWrapper = ({ children }: Props) => (
  <div className={cl.modal_wrapper}>
    <div className={cl.modal_container}> {children}</div>
  </div>
);
