export default function EducationFormContent({ education }) {
  return (
    <>
      <EducationDropdown education={education} />
      <label htmlFor="major">Major</label>
      <input
        name="major"
        id="major"
        type="text"
        defaultValue={education.major}
      />
      <label htmlFor="gpa">GPA</label>
      <input name="gpa" id="gpa" type="text" defaultValue={education.gpa} />
      <label htmlFor="start-date">Start Date</label>
      <input
        name="startDate"
        id="start-date"
        type="text"
        defaultValue={education.startDate}
      />
      <label htmlFor="graduation-date">Graduation Date</label>
      <input
        name="graduationDate"
        id="graduation-date"
        type="text"
        defaultValue={education.graduationDate}
      />
    </>
  );
}

function EducationDropdown({ education }) {
  return (
    <fieldset>
      <legend>Education</legend>
      <select
        defaultValue={education.degree}
        className="form-control dropdown"
        id="education"
        name="degree"
      >
        <option value="High School Diploma">High school</option>
        <option value="Bachelor's degree">Bachelor's degree</option>
        <option value="Master's degree">Master's degree</option>
        <option value="Doctorate's degree">Doctorate's degree</option>
      </select>
    </fieldset>
  );
}
