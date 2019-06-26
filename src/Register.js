import React from 'react';
import './register.css';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            section:3
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

      handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
    })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddAnimal(this.state);
        //me falta limpiar el formulario
        this.setState.handleInput=''
    }

    render() {
        return (

            <section id="section-register">
                <div className="container">
                    <div className="form-container">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <fieldset className="fieldset-animal">

                                <h1>Registrar un animal para adopción</h1>

                                <div className="form-row">
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <label className="" htmlFor="inlineFormInputGroup">Tipo de animal</label><br></br>
                                        <div className="form-check-inline">
                                            <input onChange={this.handleInput} id="type-dog" name="type" value="Dog" className="form-check-input" type="radio"></input>
                                            <label className="form-check-label" htmlFor="radio-btn-tipo">
                                                <img src="assets/icons/ico-dog.png" width="50" height="50" className="d-inline-block align-center" alt="Perro"></img> Perro</label>
                                        </div>

                                        <div className="form-check-inline">
                                            <input onChange={this.handleInput} id="type-cat" name="type" className="form-check-input" type="radio" value="Cat"></input>
                                            <label className="form-check-label" htmlFor="radio-btn-tipo">
                                                <img src="assets/icons/ico-cat.png" width="50" height="50" className="d-inline-block align-center" alt="Gato"></img> Gato</label>
                                        </div>

                                        <div className="form-check-inline">
                                            <input onChange={this.handleInput} id="type-other" name="type" className="form-check-input" type="radio" value="Other"></input>
                                            <label className="form-check-label" htmlFor="radio-btn-tipo">
                                                <img src="assets/icons/ico-search.png" width="50" height="50" className="d-inline-block align-center" alt="Otro"></img> Otro</label>
                                        </div>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="exampleFormControlFile1">Subí una foto</label>
                                        <input onChange={this.handleInput} id="picture" name="picture" type="file" className="form-control-file mb-2"></input>
                                    </div>

                                </div>

                                <div className="form-row">
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <label className="" htmlFor="inlineFormInputGroup">Nombre</label>
                                        <input onChange={this.handleInput} id="name" name="name" className="form-control mb-2" type="text" placeholder="Si aún no tiene, no te preocupes!"></input>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Sexo</label><br></br>
                                        <div className="form-check-inline">
                                            <input onChange={this.handleInput} id="sex-female" name="sex" className="form-check-input" type="radio" value="hembra"></input>
                                            <label className="form-check-label" htmlFor="adio-btn-sexo"> Hembra</label>
                                        </div>

                                        <div className="form-check-inline">
                                            <input onChange={this.handleInput} id="sex-male" name="sex" className="form-check-input" type="radio" value="macho"></input>
                                            <label className="form-check-label" htmlFor="radio-btn-sexo"> Macho</label>
                                        </div>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Fecha de Nacimiento</label>
                                        <input onChange={this.handleInput} id="birthdate" name="birthdate" className="form-control mb-2" type="date" placeholder="Fecha de Nacimiento"></input>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Barrio</label>
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

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Raza</label>
                                        <select onChange={this.handleInput} id="breed" name="breed" className="form-control mb-2">
                                            <option value="Raza">Raza</option>
                                            <optgroup label="PERROS">
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
                                            <optgroup label="GATOS">
                                                <option value="Persa">Persa</option>
                                                <option value="AzulRuso">Bombay</option>
                                                <option value="MaineCoon">Azul Ruso</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Color de ojos</label>
                                        <input onChange={this.handleInput} id="eyes" name="eyes" className="form-control mb-2" type="text" placeholder="Color de ojos"></input>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                        <label className="" htmlFor="inlineFormInputGroup">Color de piel</label>
                                        <input onChange={this.handleInput} id="pelt" name="pelt" className="form-control mb-2" type="text" placeholder="Color de piel"></input>
                                    </div>

                                </div>

                                <div className="form-row">
                                    <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label className="" htmlFor="inlineFormInputGroup">Descripción</label>
                                        <textarea onChange={this.handleInput} id="description" name="description" className="form-control mb-2"
                                            placeholder="Contanos lo que quieras sobre el animal que querés dar en adopción. Cualquier info nos sirve!"></textarea>
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset className="fieldset-persona">
                                <h1>Datos de la persona de contacto</h1>

                                <div className="form-row">

                                    <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <label className="" htmlFor="inlineFormInputGroup">Nombre</label>
                                        <input onChange={this.handleInput} id="personName" name="personName" className="form-control mb-2" type="text" placeholder="Nombre" required></input>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <label className="" htmlFor="inlineFormInputGroup">Teléfono</label>
                                        <input onChange={this.handleInput} id="personPhone" name="personPhone" className="form-control mb-2" type="tel" placeholder="Teléfono" required></input>
                                    </div>

                                    <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <label className="" htmlFor="inlineFormInputGroup">Email</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">@</div>
                                            </div>
                                            <input onChange={this.handleInput} id="personEmail" name="personEmail" type="text" className="form-control" placeholder="Email"></input>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset className="fieldset-buttons">
                                <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <button type="submit" className="btn btn-primary mb-2">Guardar datos</button>
                                    <button type="submit" className="btn btn-secondary mb-2">Vuelvo más tarde</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;