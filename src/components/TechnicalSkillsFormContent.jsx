export default function TechnicalSkillsFormContent({ skills }) {
  return (
    <>
      <label htmlFor="languages">Languages</label>
      <input
        name="languages"
        id="languages"
        type="text"
        defaultValue={skills.languages}
      />
      <label htmlFor="frameworks">Frameworks</label>
      <input
        name="frameworks"
        id="frameworks"
        type="text"
        defaultValue={skills.frameworks}
      />
      <label htmlFor="databases">Databases</label>
      <input
        name="databases"
        id="databases"
        type="text"
        defaultValue={skills.databases}
      />
      <label htmlFor="devtools">Devtools</label>
      <input
        name="devtools"
        id="devtools"
        type="text"
        defaultValue={skills.devtools}
      />
    </>
  );
}
