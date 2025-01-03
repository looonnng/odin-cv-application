import { useState } from 'react';
import * as Styles from './styles/Content.module.css';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ProjectFormContent from './ProjectFormContent';

export default function Project({ newProject, handleRemove, id }) {
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState(newProject);
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
    setProject({ ...formJson, description: descriptions });
    closeFormModal();
  }

  function handleMouseLeave() {
    setVisible({ visibility: 'hidden' });
  }
  function handleMouseEnter() {
    setVisible({ visibility: 'visible' });
  }

  return (
    <div>
      <ul
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={Styles.list}
      >
        <li className={`${Styles.flex}`}>
          <div className={Styles.btnWrapper}>
            <button
              style={visible}
              className={Styles.edit}
              onClick={() => setModal(true)}
            >
              Edit
            </button>
            <button
              style={visible}
              key={id}
              className={Styles.edit}
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </div>
        </li>
        <li>
          {' '}
          <b>{project.title}</b> | {project.techStack}
        </li>
        <li className={Styles.description}>
          <ul>
            {project.description.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </li>
      </ul>
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ProjectFormContent project={project} />
        </ModalContent>
      </Modal>
    </div>
  );
}
