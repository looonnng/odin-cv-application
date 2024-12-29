export default function PersonFormContent({ person }) {
  return (
    <>
      <label htmlFor="first-name">First Name</label>
      <input
        name="firstName"
        id="first-name"
        type="text"
        defaultValue={person.firstName}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        name="lastName"
        id="last-name"
        type="text"
        defaultValue={person.lastName}
      />
      <label htmlFor="user-mail">Email</label>
      <input
        name="email"
        id="user-mail"
        type="email"
        defaultValue={person.email}
      />
      <label htmlFor="phone-number">Phone Number</label>
      <input
        name="phoneNumber"
        id="phone-number"
        type="phone-number"
        defaultValue={person.phoneNumber}
      />
      <label htmlFor="github">Github</label>
      <input
        name="githubLink"
        id="github"
        type="text"
        defaultValue={person.githubLink}
      />
      <label htmlFor="linkedin">Linkedin</label>
      <input
        name="linkedinLink"
        id="linkedin"
        type="text"
        defaultValue={person.linkedinLink}
      />
    </>
  );
}