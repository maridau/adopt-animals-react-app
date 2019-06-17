import React from 'react';
import './listAnimal.css';
import FormBuscar from './FormBuscar.js';
import { baseAnimals } from './baseAnimals.json';

class ListAnimal extends React.Component {
  constructor() {
    super();
    this.state = {
      baseAnimals
    };
  }

  render() {
    const listadoAnimales = this.state.baseAnimals.map((baseAnimals, i) => {

      return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <a className="card-link" href="#animal" onClick={this.goToAnimal}>
            <div className="card card-container mb-4 shadow-sm">
              <img className="card-foto" src={baseAnimals.picture} alt="Jacinta" title="Perro en adopcion"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="card-title">{baseAnimals.name}</div>
                  <small className="text-muted"><img src={baseAnimals.icon} width="50" height="50"
                    className="d-inline-block align-right" alt="Dog"></img></small>
                </div>
                <div className="container-card-list-group">
                  <ul className="card-list-group">
                    <li className="card-list-group-item"><strong>{baseAnimals.breed}</strong></li>
                    <li className="card-list-group-item">{baseAnimals.sex}</li>
                    <li className="card-list-group-item">{baseAnimals.zone}</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <form>
                    <button type="submit" className="btn btn-primary mb-2">Lo quiero conocer</button>
                  </form>
                  <small className="text-muted"><img src="assets/icons/ico-love.png" width="30" height="30"
                    className="d-inline-block align-center" alt="Favoritos"></img></small>
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
            {listadoAnimales}
          </div>
        </div>
      </section>
    );
  }
}


export default ListAnimal;