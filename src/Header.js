import React from 'react';


class Header extends React.Component {
  render() {
   return (
  
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
          <a className="navbar-brand" href="#home" onClick={this.props.goToListAnimals}>
            <img src="assets/icons/ico-logo.png" width="80" height="80" className="d-inline-block align-items-center" alt=""></img>
            ADOPT ANIMALS
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={this.props.goToListAnimals}><img src="assets/icons/ico-home.png" width="50" height="50"
                    className="d-inline-block align-center" alt="Inicio"></img>ANIMALES PARA ADOPCIÓN </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#register" onClick={this.props.goToRegister}><img src="assets/icons/ico-new.png" width="50" height="50"
                    className="d-inline-block align-center" alt="Registrar animal"></img>REGISTRAR ANIMAL</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#favorites" onClick={this.props.goToFavorites}><img src="assets/icons/ico-loveit.png" width="50" height="50"
                    className="d-inline-block align-center" alt="Favoritos"></img>FAVORITOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog" onClick={this.props.goToBlog}><img src="assets/icons/ico-blog.png" width="50" height="50"
                    className="d-inline-block align-center" alt="Blog"></img>BLOG</a>
              </li>
            </ul>
            
          </div>
        </nav>
      </header>

  );
}
}


export default Header;