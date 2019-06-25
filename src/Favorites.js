import React from 'react';
import './listAnimal.css';

class Favorites extends React.Component {

    render() {
        const fav = this.props.animals.filter(animals => animals.favorite === "true");
        const listFavorites = fav.map((fav, i) => {

            return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <a className="card-link" href="#animal" onClick={this.goToAnimal}>
                        <div className="card card-container mb-4 shadow-sm">
                            <img className="card-foto" src={fav.picture} alt="Jacinta" title="Perro en adopcion"></img>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="card-title">{fav.name}</div>
                                    <small className="text-muted"><img src={fav.icon} width="50" height="50"
                                        className="d-inline-block align-right" alt="Dog"></img></small>
                                </div>
                                <div className="container-card-list-group">
                                    <ul className="card-list-group">
                                        <li className="card-list-group-item"><strong>{fav.breed}</strong></li>
                                        <li className="card-list-group-item">{fav.sex}</li>
                                        <li className="card-list-group-item">{fav.zone}</li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <form>
                                        <button type="submit" className="btn btn-primary mb-2">Adoptar</button>
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
            <section>
                <div className="container">
                    <form>
                        <h1>Favoritos</h1>
                        <p className="parrafo-buscar">Estos son los animales que te interesaron! <br></br>
                        Los guardamos para ayudarte a elegir :)</p>
                        <fieldset>
                            <div className="row">
                                {listFavorites}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}


export default Favorites;