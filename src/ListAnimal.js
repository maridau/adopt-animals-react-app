import React from 'react';
import './listAnimal.css';
import ToggleFavorite from './ToggleFavorite.js';

class ListAnimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: '',
      filterBreed: '',
      filterSex: '',
      filterZone: ''
    };
  }

  handleFilterType = event => {
    this.setState({
      filterType: event.target.value
    });
  };

  handleFilterBreed = event => {
    this.setState({
      filterBreed: event.target.value
    });
  };

  handleFilterSex = event => {
    this.setState({
      filterSex: event.target.value
    });
  };

  handleFilterZone = event => {
    this.setState({
      filterZone: event.target.value
    });
  };

  render() {
    //no me anduvo con el primer intento de filtro. 
    //const animalCards= this.props.animals.filter(item => this.props.filterType === null || item.type === this.props.filterType).map((animalItem, i) => {  
    const animalCards = this.props.animals
      .filter(item => item.type.includes(this.state.filterType))
      .filter(item => item.breed.includes(this.state.filterBreed))
      .filter(item => item.sex.includes(this.state.filterSex))
      .filter(item => item.zone.includes(this.state.filterZone))
      .map((animalItem, i) => {

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
                      <button type="submit" className="btn btn-primary mb-2" onClick={(e) => this.props.goToAnimal(animalItem.id, e)}>Lo quiero conocer</button>
                    </form>
                    <small className="text-muted"><ToggleFavorite favAnimal={animalItem[i]} /></small>
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
          <form className="">
            <h1>Encontrá tu mascota aquí</h1>
            <p className="parrafo-buscar">Adoptar no es comprar, no somos una tienda, adoptar es añadir un nuevo miembro a tu
                        familia, <br></br>único, con su físico, su personalidad y su historia.</p>

            <fieldset className="fieldset-buscar">
              <div className="form-row">
                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="form-check-inline">
                    <input onChange={this.handleFilterType} id="type-dog" name="type" className="form-check-input" type="radio" value="Dog"></input>
                    <label className="form-check-label" htmlFor="radio-btn-tipo">
                      <img src="assets/icons/ico-dog.png" width="50" height="50" className="d-inline-block align-center"
                        alt="Perro"></img> Perro</label>

                  </div>
                  <div className="form-check-inline item-align-center">
                    <input onChange={this.handleFilterType} id="type-cat" name="type" className="form-check-input" type="radio" value="Cat"></input>
                    <label className="form-check-label" htmlFor="radio-btn-tipo">
                      <img src="assets/icons/ico-cat.png" width="50" height="50" className="d-inline-block align-center"
                        alt="Gato"></img> Gato</label>
                  </div>
                  <div className="form-check-inline">
                    <input onChange={this.handleFilterType} id="type-other" name="type" className="form-check-input" type="radio" value="Other"></input>
                    <label className="form-check-label" htmlFor="radio-btn-tipo">
                      <img src="assets/icons/ico-search.png" width="50" height="50" className="d-inline-block align-center"
                        alt="Otro"></img> Otro</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <label htmlFor="inlineFormInputGroup"></label>
                  <select onChange={this.handleFilterBreed} id="breed" name="breed" className="form-control mb-2">
                    <option value="">Raza</option>
                    <optgroup id="dog-breed" label="PERROS">
                      <option value="Beagle">Beagle</option>
                      <option value="Border Collie ">Border Collie </option>
                      <option value="Boxer">Boxer</option>
                      <option value="Bulldog">Bulldog</option>
                      <option value="Caniche">Caniche</option>
                      <option value="Labrador">Labrador</option>
                      <option value="Pastor Aleman">Pastor Aleman</option>
                      <option value="Pekines">Pekines</option>
                      <option value="Sabueso">Sabueso</option>
                    </optgroup>
                    <optgroup id="cat-breed" label="GATOS">
                      <option value="Persa">Persa</option>
                      <option value="AzulRuso">Bombay</option>
                      <option value="MaineCoon">Azul Ruso</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <label className="" htmlFor="inlineFormInputGroup"></label>
                  <div className="form-check-inline">
                    <input onChange={this.handleFilterSex} id="sex-female" name="sex" className="form-check-input" type="radio" value="Hembra"></input>
                    <label className="form-check-label" htmlFor="adio-btn-sexo"> Hembra</label>
                  </div>
                  <div className="form-check-inline">
                    <input onChange={this.handleFilterSex} id="sex-male" name="sex" className="form-check-input" type="radio" value="Macho"></input>
                    <label className="form-check-label" htmlFor="radio-btn-sexo"> Macho</label>
                  </div>
                </div>


                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <label className="" htmlFor="inlineFormInputGroup"></label>
                  <select onChange={this.handleFilterZone} id="zone" name="zone" className="form-control mb-2">
                    <option value="">Barrio</option>
                    <option value="Aguada">Aguada</option>
                    <option value="Atahualpa">Atahualpa</option>
                    <option value="Belvedere">Belvedere</option>
                    <option value="Brazo Oriental">Brazo Oriental</option>
                    <option value="Centro">Centro</option>
                    <option value="Ciudad Vieja">Ciudad Vieja</option>
                    <option value="Cordon">Cordon</option>
                    <option value="Colon">Colon</option>
                    <option value="Malvin">Malvin</option>
                    <option value="Lezica">Lezica</option>
                    <option value="Palermo">Palermo</option>
                    <option value="Parque Rodo">Parque Rodo</option>
                    <option value="Pocitos">Pocitos</option>
                    <option value="Punta Carretas">Punta Carretas</option>
                    <option value="Reducto">Reducto</option>
                    <option value="Sayago">Sayago</option>
                    <option value="Villa Española">Villa Española</option>
                  </select>
                </div>
              </div>

            </fieldset>
          </form>
          <div className="row">
            {animalCards}
          </div>
        </div>
      </section>
    );
  }
}


export default ListAnimal;