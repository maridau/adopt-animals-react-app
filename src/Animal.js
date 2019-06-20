import React from 'react';
import './animal.css';


class Animal extends React.Component {
    constructor() {
        super();
        this.state = {
          baseAnimals
        };
      }
      
    render() {
        const animalItem = this.state.baseAnimals.map((animalItem, i) => {
            
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="assets/p1.jpeg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/p2.jpg" alt="Second slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="assets/p3.jpg" alt="Third slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Anterior</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Siguiente</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="animal-perfil">
                            <div className="animal-title"><img src="assets/icons/ico-dog.png" width="50" height="50"
                                    className="d-inline-block align-center" alt="Perros"></img> Jacinta</div><br></br>

                            <div className="animal-descripcion"><strong>Sexo:</strong> Hembra</div>
                            <div className="animal-descripcion"><strong>Fecha de nacimiento:</strong> 13 de Marzo de 2019
                            </div>
                            <div className="animal-descripcion"><strong>Barrio:</strong> Atahualpa</div>
                            <div className="animal-descripcion"><strong>Raza:</strong> Labrador</div>
                            <div className="animal-descripcion"><strong>Color de ojos:</strong> Marrones</div>
                            <div className="animal-descripcion"><strong>Pelo:</strong> Claro</div>
                            <div className="animal-descripcion">
                                <p>Jacinta pasa el día encerrada a la búsqueda de una familia que la quiera como ella
                                    merece.
                                    Actualmente la cuida una familia con escasos recursos económicos que a pesar de
                                    quererla mucho, no se puede hacer cargo de él.</p>
                            </div>
                            <form>
                                <fieldset className="fieldset-buttons">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mb-2">Lo quiero
                                            adoptar</button>
                                        <button type="submit" className="btn btn-secondary mb-2">Seguir
                                            buscando</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
    );
    }
}


export default Animal;