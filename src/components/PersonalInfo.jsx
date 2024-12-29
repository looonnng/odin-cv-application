import { useState } from 'react';
import * as Styles from './styles/Content.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import PersonFormContent from './PersonFormContent';

export default function PersonalInfo() {
  const [modal, setModal] = useState(false);
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@gmail.com',
    phoneNumber: 'xxx-xxx-xxxx',
    githubLink: 'example.com',
    linkedinLink: 'example.com',
  });

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setPerson(formJson);
    closeFormModal();
  }

  return (
    <section>
      <div className={Styles.flex}>
        <button className={Styles.edit} onClick={() => setModal(true)}>
          Edit
        </button>
      </div>

      <h1 className={Styles.textCenter}>
        {person.firstName} {person.lastName}
      </h1>
      <ul className={`${Styles.flex} ${Styles.personal}`}>
        <li>{person.email}</li>
        <li>{person.phoneNumber}</li>
        <li>{person.githubLink}</li>
        <li>{person.linkedinLink}</li>
      </ul>

      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent closeModal={closeFormModal} onSaveForm={handleSaveForm}>
          <PersonFormContent person={person}></PersonFormContent>
        </ModalContent>
      </Modal>
    </section>
  );
}
