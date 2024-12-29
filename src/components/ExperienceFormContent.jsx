export default function ExperienceFormContent({ experience }) {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        id="title"
        type="text"
        defaultValue={experience.title}
      />
      <label htmlFor="location">Location</label>
      <input
        name="location"
        id="location"
        type="text"
        defaultValue={experience.location}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        name="startDate"
        id="startDate"
        type="text"
        defaultValue={experience.startDate}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        name="endDate"
        id="endDate"
        type="text"
        defaultValue={experience.endDate}
      />
      <label>Descriptions</label>
      <input
        name="description"
        type="text"
        defaultValue={experience.description[0]}
      />
      <input
        name="description"
        type="text"
        defaultValue={experience.description[1]}
      />
      <input
        name="description"
        type="text"
        defaultValue={experience.description[2]}
      />
    </>
  );
}
