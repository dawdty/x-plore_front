// define the app header here (logo, navbar, help button)
interface Props {
  theme: string;
  handleClick: () => void;
}

function Header({ theme, handleClick }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            X~P(lore)
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Friends
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Account
                </a>
              </li>
            </ul>
            <button className="btn" type="submit" onClick={handleClick}>
              {theme == "dark" ? "Dark Mode" : "Light Mode"}
            </button>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
