import { useState } from 'react';
import * as Styles from './styles/PersonalInfo.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import EducationFormContent from './EducationFormContent';

export default function Education() {
  const [modal, setModal] = useState(false);
  const [education, setEducation] = useState({
    degree: 'lorem ipsum',
    major: 'lorem ipsum',
    gpa: 0,
    startDate: 'lorem 2036',
    graduationDate: 'lorem 2040',
  });

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setEducation(formJson);
    closeFormModal();
  }

  return (
    <section>
      <button onClick={() => setModal(true)}>Edit</button>
      <div className={Styles.wrapper}>
        <h1>Education</h1>
        <ul className={Styles.list}>
          <li>
            {education.degree} in {education.major}
          </li>
          <li>GPA: {education.gpa} / 4.00</li>
          <li>
            {education.startDate} - {education.graduationDate}
          </li>
        </ul>
      </div>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <EducationFormContent education={education} />
        </ModalContent>
      </Modal>
    </section>
  );
}
