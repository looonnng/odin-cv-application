import { useState } from 'react';
import * as Styles from './styles/PersonalInfo.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ProjectFormContent from './ProjectFormContent';

export default function Project({ newProject }) {
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState(newProject);

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const descriptions = formData.getAll('description'); // combine all three description inputs fields into an array
    setProject({ ...formJson, description: descriptions });
    closeFormModal();
  }

  return (
    <section>
      <button onClick={() => setModal(true)}>Edit</button>
      <div className={Styles.wrapper}>
        <ul className={Styles.list}>
          <li>{project.title}</li>
          <li>{project.techStack}</li>
          <li>
            <ul>
              {project.description.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ProjectFormContent project={project} />
        </ModalContent>
      </Modal>
    </section>
  );
}
