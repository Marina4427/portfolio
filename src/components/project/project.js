import "./style.css";
import { NavLink } from "react-router-dom";

const Project = ({ title, img, id }) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <div className="img__container">
          <img src={img} alt={title} className="project__img" />
        </div>
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
