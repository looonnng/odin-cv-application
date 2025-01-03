import { useState } from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ProjectFormContent from './ProjectFormContent';
import Project from './Project';
import * as Styles from './styles/Content.module.css';

export default function ProjectWrapper() {
  const initialProject = {
    title: 'lorem',
    techStack: 'lorem ipsum',
    description: ['lorem', 'lorem2', 'lorem3'],
  };

  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([initialProject]);

  function closeFormModal() {
    setModal(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const descriptions = formData.getAll('description'); // combine all three description inputs fields into an array
    const project = { ...formJson, description: descriptions };

    setProjects((prevProjects) => [...prevProjects, project]);
    closeFormModal();
  }

  function handleRemove(key) {
    setProjects(projects.filter((project) => project.title !== key));
  }

  function handleMouseLeave() {
    setVisible({ visibility: 'hidden' });
  }
  function handleMouseEnter() {
    setVisible({ visibility: 'visible' });
  }

  const [visible, setVisible] = useState({ visibility: 'hidden' });

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${Styles.flex} ${Styles.titleWrapper}`}>
        <h1 className={Styles.title}>Project</h1>
        <button style={visible} onClick={() => setModal(true)}>
          Add new
        </button>
      </div>
      {projects.map((project) => (
        <Project
          handleRemove={handleRemove}
          key={project.title}
          id={project.title}
          newProject={project}
        ></Project>
      ))}
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ProjectFormContent project={initialProject} />
        </ModalContent>
      </Modal>
    </section>
  );
}
