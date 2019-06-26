import React from 'react';
import './animal.css';


class Animal extends React.Component {

    render() {
        return (
            <section id="animal">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={this.props.animalItem.picture} alt="First slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={this.props.animalItem.picture} alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={this.props.animalItem.picture} alt="Third slide"></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Anterior</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Siguiente</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="animal-perfil">
                                <div className="animal-title"><img src={this.props.animalItem.icon} width="50" height="50"
                                    className="d-inline-block align-center" alt="Perros"></img> {this.props.animalItem.name}</div><br></br>

                                <div className="animal-descripcion"><strong>Sexo:</strong> {this.props.animalItem.sex}</div>
                                <div className="animal-descripcion"><strong>Fecha de nacimiento:</strong> {this.props.animalItem.birthDate}
                                </div>
                                <div className="animal-descripcion"><strong>Barrio:</strong> {this.props.animalItem.zone}</div>
                                <div className="animal-descripcion"><strong>Raza:</strong> {this.props.animalItem.breed}</div>
                                <div className="animal-descripcion"><strong>Color de ojos:</strong> {this.props.animalItem.eyes}</div>
                                <div className="animal-descripcion"><strong>Pelo:</strong> {this.props.animalItem.pelt}</div>
                                <div className="animal-descripcion">
                                    <p>{this.props.animalItem.description}</p>
                                </div>
                                <form>
                                    <fieldset className="fieldset-buttons">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary mb-2">Lo quiero adoptar</button>
                                            <button type="submit" className="btn btn-secondary mb-2">Seguir buscando</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );

    }

}

export default Animal;