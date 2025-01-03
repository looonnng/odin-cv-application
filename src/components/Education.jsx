import { useState } from 'react';
import * as Styles from './styles/Content.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import EducationFormContent from './EducationFormContent';

export default function Education() {
  const [modal, setModal] = useState(false);
  const [education, setEducation] = useState({
    school: 'university college',
    location: 'lorem',
    degree: 'High School',
    major: 'business',
    gpa: 0,
    startDate: 'lorem 2036',
    graduationDate: 'lorem 2040',
  });
  const [visible, setVisible] = useState({ visibility: 'hidden' });

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

  function handleMouseLeave() {
    setVisible({ visibility: 'hidden' });
  }
  function handleMouseEnter() {
    setVisible({ visibility: 'visible' });
  }

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${Styles.flex} ${Styles.titleWrapper}`}>
        <h1 className={Styles.title}>Education</h1>
        <button style={visible} onClick={() => setModal(true)}>
          Edit
        </button>
      </div>
      <ul className={Styles.list}>
        <li className={`${Styles.flex} ${Styles.item}`}>
          <p>{education.school}</p>
          <p>{education.location}</p>
        </li>
        <li className={`${Styles.flex} ${Styles.item}`}>
          <p>
            {education.degree} in {education.major}
          </p>
          <p>
            {education.startDate} - {education.graduationDate}
          </p>
        </li>
        <li>GPA: {education.gpa} / 4.00</li>
      </ul>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <EducationFormContent education={education} />
        </ModalContent>
      </Modal>
    </section>
  );
}
