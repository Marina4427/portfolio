import "./style.css";

const Contacts = () => {
  return (
    <main class="section">
      <div class="container">
        <h1 class="title-1">Contacts</h1>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Location</h2>
            <p>Espoo, Finland</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">GitHub</h2>
            <p>
              <a href="https://github.com/Marina4427" target="_blank" rel="noreferrer" >
                https://github.com/Marina4427
              </a>
            </p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Email</h2>
            <p>
              <a href="mailto:marineska4427@gmail.com">
                marineska4427@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
