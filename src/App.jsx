import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import ProjectWrapper from './components/ProjectWrapper';

function App() {
  return (
    <>
      <PersonalInfo></PersonalInfo>
      <Education />
      <TechnicalSkills />
      <Experience />
      <ProjectWrapper />
    </>
  );
}

export default App;
