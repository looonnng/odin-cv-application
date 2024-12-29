import { useState } from 'react';
import * as Styles from './styles/PersonalInfo.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ExperienceFormContent from './ExperienceFormContent';

export default function Experience() {
  const [modal, setModal] = useState(false);
  const [experience, setExperience] = useState({
    title: 'lorem ipsum',
    location: 'redwood city, CA',
    startDate: 'lorem 2024',
    endDate: 'ipsum 2022',
    description: ['lorem', 'lorem2', 'lorem3'],
  });

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const descriptions = formData.getAll('description'); // combine all three description inputs fields into an array
    setExperience({ ...formJson, description: descriptions });
    closeFormModal();
  }

  return (
    <section>
      <button onClick={() => setModal(true)}>Edit</button>
      <div className={Styles.wrapper}>
        <h1>Experience</h1>
        <ul className={Styles.list}>
          <li>{experience.title}</li>
          <li>{experience.location}</li>
          <li>
            {experience.startDate} - {experience.endDate}
          </li>
          <li>
            <ul>
              {experience.description.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ExperienceFormContent experience={experience} />
        </ModalContent>
      </Modal>
    </section>
  );
}
