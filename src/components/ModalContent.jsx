import * as Styles from './styles/Modal.module.css';

export default function ModalContent({ closeModal, onSaveForm, children }) {
  const KEY = crypto.randomUUID(); // different edits need different form id
  return (
    <>
      <div className={`${Styles.flex} ${Styles.wrapper}`}>
        <button type="reset" form={KEY} onClick={closeModal}>
          🅧
        </button>
      </div>
      <form
        id={KEY}
        autoComplete="off"
        onSubmit={onSaveForm}
        className={`${Styles.content}`}
      >
        {children}
        <div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}
