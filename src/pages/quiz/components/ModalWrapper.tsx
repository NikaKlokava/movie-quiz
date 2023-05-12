import cl from "./modal-wrapper.module.css";

export const ModalWrapper = ({ children }: any) => {
  return (
    <div className={cl.modal_wrapper}>
      <div className={cl.modal_container}> {children}</div>
    </div>
  );
};
