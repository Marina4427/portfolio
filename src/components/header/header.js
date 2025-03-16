import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Marina</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/Marina4427" target="_blank" rel="noreferrer" className="btn">
          View my GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
