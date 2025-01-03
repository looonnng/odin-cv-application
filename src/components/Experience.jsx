import { useState } from 'react';
import * as Styles from './styles/Content.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ExperienceFormContent from './ExperienceFormContent';

export default function Experience() {
  const [modal, setModal] = useState(false);
  const [experience, setExperience] = useState({
    employer: 'alphabet',
    title: 'lorem ipsum',
    location: 'redwood city, CA',
    startDate: 'lorem 2024',
    endDate: 'ipsum 2022',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.',
      'Sed ab sint doloribus, numquam est eaque ratione',
      'libero facere similique explicabo, vel debitis. adipisicing elit. Voluptatem, sed.',
    ],
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

    const descriptions = formData.getAll('description'); // combine all three description inputs fields into an array
    setExperience({ ...formJson, description: descriptions });
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
        <h1 className={Styles.title}>Experience</h1>
        <button style={visible} onClick={() => setModal(true)}>Edit</button>
      </div>
      <ul className={Styles.list}>
        <li className={`${Styles.flex} ${Styles.item}`}>
          <p>{experience.employer}</p>
          <p>{experience.location}</p>
        </li>
        <li className={`${Styles.flex} ${Styles.item}`}>
          <p>{experience.title}</p>
          <p>
            {experience.startDate}- {experience.endDate}
          </p>
        </li>
        <li className={Styles.description}>
          <ul>
            {experience.description.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </li>
      </ul>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ExperienceFormContent experience={experience} />
        </ModalContent>
      </Modal>
    </section>
  );
}
