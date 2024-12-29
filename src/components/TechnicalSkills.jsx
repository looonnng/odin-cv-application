import { useState } from 'react';
import * as Styles from './styles/Content.module.css';

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
      <div className={`${Styles.flex} ${Styles.titleWrapper}`}>
        <h1 className={Styles.title}>Technical Skills</h1>
        <button onClick={() => setModal(true)}>Edit</button>
      </div>
      <ul className={Styles.list}>
        <li>
          <b>Languages: </b>
          {skills.languages}
        </li>
        <li>
          <b>Frameworks:</b> {skills.frameworks}
        </li>
        <li>
          <b>Databases: </b>
          {skills.databases}
        </li>
        <li>
          <b>DevTools:</b> {skills.devtools}
        </li>
      </ul>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <TechnicalSkillsFormContent skills={skills} />
        </ModalContent>
      </Modal>
    </section>
  );
}
