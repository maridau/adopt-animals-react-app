import React from 'react';

class ToggleFavorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isFav: true,     
        };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
      handleClick() {
          this.setState(function(prevState) {
              return {
                isFav: !prevState.isFav
                        /* ME FALTA CAMBIAR EL ESTADO DEL ANIMAL */          
              };
          });
      }
      
 
    render() {
      return (
        <a href="#toggle" onClick={this.handleClick}>
          {this.state.isFav ? <img src="assets/icons/ico-love.png" width="30" height="30"
                    className="d-inline-block align-center" alt="Favoritos"></img> : <img src="assets/icons/ico-loveit.png" width="30" height="30"
                    className="d-inline-block align-center" alt="Favoritos"></img>}
        </a>
      );
    }
  }
  export default ToggleFavorite;