export default function ProjectFormContent({ project }) {
  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          defaultValue={project.title}
        />
      </div>
      <div>
        <label htmlFor="techStack">Tech Stack</label>
        <input
          name="techStack"
          id="techStack"
          type="text"
          defaultValue={project.techStack}
        />
      </div>
      <div>
        <label>Descriptions</label>
        <input
          name="description"
          type="text"
          defaultValue={project.description[0]}
        />
        <input
          name="description"
          type="text"
          defaultValue={project.description[1]}
        />
        <input
          name="description"
          type="text"
          defaultValue={project.description[2]}
        />
      </div>
    </>
  );
}
