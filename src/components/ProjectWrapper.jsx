import { useState } from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ProjectFormContent from './ProjectFormContent';
import Project from './Project';

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

  return (
    <div>
      <h1>Project</h1>
      <button onClick={() => setModal(true)}>Add new</button>
      {projects.map((project, i) => (
        <Project key={i} newProject={project}></Project>
      ))}
      <Modal openModal={modal} closeModal={closeFormModal}>
        <ModalContent onSaveForm={handleSaveForm} closeModal={closeFormModal}>
          <ProjectFormContent project={initialProject} />
        </ModalContent>
      </Modal>
    </div>
  );
}
