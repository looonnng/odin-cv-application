import { useRef, useEffect } from 'react';
import * as Styles from './styles/Modal.module.css';

export default function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className={Styles.modal}>
      {children}
    </dialog>
  );
}
