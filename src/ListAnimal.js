import React from 'react';
import './listAnimal.css';
import FormBuscar from './FormBuscar.js';
import ToggleFavorite from './ToggleFavorite.js';

class ListAnimal extends React.Component {

render() {
  //const animalCards= this.props.animals.filter(item => this.props.typeFilter === null || item.type === this.props.typeFilter).map((animalItem, i) => {  
  const animalCards= this.props.animals.map((animalItem, i) => {  

      return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <a className="card-link" href="#animal">
            <div className="card card-container mb-4 shadow-sm">
              <img className="card-foto" src={animalItem.picture} alt="Animal en adopcion" title="Animal en adopcion"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="card-title">{animalItem.name}</div>
                  <small className="text-muted"><img src={animalItem.icon} width="50" height="50"
                    className="d-inline-block align-right" alt="Dog"></img></small>
                </div>
                <div className="container-card-list-group">
                  <ul className="card-list-group">
                    <li className="card-list-group-item"><strong>{animalItem.breed}</strong></li>
                    <li className="card-list-group-item">{animalItem.sex}</li>
                    <li className="card-list-group-item">{animalItem.zone}</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <form>
                    <button type="submit" className="btn btn-primary mb-2" onClick={(e)=>this.props.goToAnimal(animalItem.id,e)}>Lo quiero conocer</button>
                  </form>
                  <small className="text-muted"><ToggleFavorite favAnimal={animalItem[i]}/></small>
                </div>
              </div>
            </div>
          </a>
        </div>
      )
    })


    return (
      <section id="listado-animales">
        <div className="container">
          <FormBuscar />
          <div className="row">
            {animalCards}
          </div>
        </div>
      </section>
    );
  }
}


export default ListAnimal;