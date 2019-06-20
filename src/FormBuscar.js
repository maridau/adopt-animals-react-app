import React from 'react';
import './listAnimal.css';


class FormBuscar extends React.Component {
handleInput(e){
    console.log(e.target.name, e.target.value);
}

    render() {
        return (

                   <form className="">
                        <h1>Encontrá tu mascota aquí</h1>
                        <p className="parrafo-buscar">Adoptar no es comprar, no somos una tienda, adoptar es añadir un nuevo miembro a tu
                        familia, <br></br>único, con su físico, su personalidad y su historia.</p>

                        <fieldset className="fieldset-buscar">
                            <div className="form-row">
                                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="form-check-inline">
                                        <input onChange={this.handleInput} id="type-dog" name="type" className="form-check-input" type="radio" value="Dog"></input>
                                        <label className="form-check-label" htmlFor="radio-btn-tipo">
                                            <img src="assets/icons/ico-dog.png" width="50" height="50" className="d-inline-block align-center"
                                                alt="Perro"></img> Perro</label>

                                    </div>
                                    <div className="form-check-inline item-align-center">
                                        <input onChange={this.handleInput} id="type-cat" name="type" className="form-check-input" type="radio" value="Cat"></input>
                                        <label className="form-check-label" htmlFor="radio-btn-tipo">
                                            <img src="assets/icons/ico-cat.png" width="50" height="50" className="d-inline-block align-center"
                                                alt="Gato"></img> Gato</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input onChange={this.handleInput} id="type-other" name="type" className="form-check-input" type="radio" value="Other"></input>
                                        <label className="form-check-label" htmlFor="radio-btn-tipo">
                                            <img src="assets/icons/ico-search.png" width="50" height="50" className="d-inline-block align-center"
                                                alt="Otro"></img> Otro</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <label htmlFor="inlineFormInputGroup"></label>
                                    <select onChange={this.handleInput} id="breed" name="breed" className="form-control mb-2">
                                        <option value="breed">Raza</option>
                                        <optgroup id="dog-breed" label="PERROS">
                                            <option value="Beagle">Beagle</option>
                                            <option value="Border Collie ">Border Collie </option>
                                            <option value="Boxer">Boxer</option>
                                            <option value="Bulldog">Bulldog</option>
                                            <option value="Caniche">Caniche</option>
                                            <option value="Labrador">Labrador</option>
                                            <option value="PastorAleman">Pastor alemán</option>
                                            <option value="Pekines">Pekinés</option>
                                            <option value="Sabueso">Sabueso</option>
                                        </optgroup>
                                        <optgroup id="cat-breed" label="GATOS">
                                            <option value="Persa">Persa</option>
                                            <option value="AzulRuso">Bombay</option>
                                            <option value="MaineCoon">Azul Ruso</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <label className="" htmlFor="inlineFormInputGroup"></label>
                                    <div className="form-check-inline">
                                        <input onChange={this.handleInput} id="sex-female" name="sex" className="form-check-input" type="radio"  value="hembra"></input>
                                        <label className="form-check-label" htmlFor="adio-btn-sexo"> Hembra</label>                                              
                                    </div>
                                    <div className="form-check-inline">
                                        <input onChange={this.handleInput} id="sex-male" name="sex" className="form-check-input" type="radio"  value="macho"></input>
                                        <label className="form-check-label" htmlFor="radio-btn-sexo"> Macho</label>
                                    </div>
                                </div>

                                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <label className="" htmlFor="inlineFormInputGroup"></label>
                                    <select onChange={this.handleInput} id="age" name="age" className="form-control mb-2">
                                        <option value="Cachorro">Edad aproximada</option>
                                        <option value="Cachorro">Cachorro hasta 1 año</option>
                                        <option value="1-3">1 a 3 años</option>
                                        <option value="3-5">3 a 5 años</option>
                                        <option value="5-10">5 a 10 años</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <label className="" htmlFor="inlineFormInputGroup"></label>
                                    <select onChange={this.handleInput} id="zone" name="zone" className="form-control mb-2">
                                        <option value="Barrio">Barrio</option>
                                        <option value="Aguada">Aguada</option>
                                        <option value="Atahualpa">Atahualpa</option>
                                        <option value="Belvedere">Belvedere</option>
                                        <option value="BrazoOriental">Brazo Oriental</option>
                                        <option value="Centro">Centro</option>
                                        <option value="CiudadVieja">Ciudad Vieja</option>
                                        <option value="Cordon">Cordón</option>
                                        <option value="Coloón">Colón</option>
                                        <option value="Malvin">Malvín</option>
                                        <option value="Lezica">Lezica</option>
                                        <option value="Palermo">Palermo</option>
                                        <option value="ParqueRodo">Parque Rodó</option>
                                        <option value="Pocitos">Pocitos</option>
                                        <option value="PuntaCarretas">Punta Carretas</option>
                                        <option value="Reducto">Reducto</option>
                                        <option value="Sayago">Sayago</option>
                                        <option value="VillaEspañola">Villa Española</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <button type="submit" className="btn btn-primary">Buscar</button>
                            </div>

                        </fieldset>
                    </form>
        );
    }
}


export default FormBuscar;