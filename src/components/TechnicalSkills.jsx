import { useState } from 'react';
import * as Styles from './styles/PersonalInfo.module.css';

import Modal from './Modal';
import ModalContent from './ModalContent';
import TechnicalSkillsFormContent from './TechnicalSkillsFormContent';

export default function TechnicalSkills() {
  const [modal, setModal] = useState(false);
  const [skills, setSkills] = useState({
    languages: 'Lorem ipsum dolor sit amet',
    frameworks: 'consectetur adipisicing elit',
    databases: 'Maxime repudiandae voluptatibus quidem, tenetur in',
    devtools: 'repellendus laborum nesciunt aspernatur! Aliquid, eos!',
  });

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setSkills(formJson);
    closeFormModal();
  }

  return (
    <section>
      <button onClick={() => setModal(true)}>Edit</button>
      <div className={Styles.wrapper}>
        <h1>Technical Skills</h1>
        <ul className={Styles.list}>
          <li>Languages: {skills.languages}</li>
          <li>Frameworks: {skills.frameworks}</li>
          <li>Databases: {skills.databases}</li>
          <li>DevTools: {skills.devtools}</li>
        </ul>
      </div>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <TechnicalSkillsFormContent skills={skills} />
        </ModalContent>
      </Modal>
    </section>
  );
}
