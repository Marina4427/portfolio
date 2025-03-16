import "./style.css";
import { useParams } from 'react-router-dom';
import { projects } from "../../helper/projectsList";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";

const Project = () => {
  const {id} = useParams();
    // Находим проект по id
    const project = projects.find((project) => project.id === id);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.imgBig} alt={project.title} className="project-details__cover" />
          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHublink && (
            <BtnGitHub link={project.gitHublink} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;
