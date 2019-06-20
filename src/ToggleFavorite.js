import React from 'react';
import { baseAnimals } from './baseAnimals.json';

class ToggleFavorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isToggleOn: true,
          baseAnimals
        
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
      handleClick() {
          this.setState(function(prevState) {
              return {isToggleOn: !prevState.isToggleOn};
          });
      }
      
      // ES6 -------
      // handleClick() {
      // 	this.setState(prevState => ({
      // 		isToggleOn: !prevState.isToggleOn
      // 	}));
      // }
  
    render() {
      return (
        <a href="#toggle" onClick={this.handleClick}>
          {this.state.isToggleOn ? <img src="assets/icons/ico-love.png" width="30" height="30"
                    className="d-inline-block align-center" alt="Favoritos"></img> : <img src="assets/icons/ico-loveit.png" width="30" height="30"
                    className="d-inline-block align-center" alt="Favoritos"></img>}
        </a>
      );
    }
  }
  export default ToggleFavorite;