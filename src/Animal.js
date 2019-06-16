import React from 'react';
import './animal.css';


class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.animals = [ 
          {id: 1, type: 'Dog', picture: 'src="assets/p1.jpeg"', name: 'Jata', sex: 'Hembra', birthDate: '03/07/2015', zone: 'Reducto',  breed:'Sabueso', eyes: 'Marrón', pelt:'Beige', description:'Es muy bueno', favorite:'false'},
          {id: 2, type: 'Cat', picture: 'src="assets/g1.jpg"', name: 'Felix', sex: 'Macho', birthDate: '11/01/2017', zone: 'Colon',  breed:'Bombay', eyes: 'Marrón', pelt:'Negro', description:'Es muy Lindo', favorite:'false'},
          {id: 3, type: 'Dog', picture: 'src="assets/p2.jpg"', name: 'Chispas', sex: 'Macho', birthDate: '17/01/2019', zone: 'La Blanqueada',  breed:'Labrador', eyes: 'Marrón', pelt:'Beige', description:'Es muy tierno', favorite:'false'}
        ]
        this.state = { 
        };
    }
    render() {
        return (
            <section id="listado-animales">
                  <div class="container">
                    <p>{this.animnals.map(animal=><Animal animal={animal} key={animal.id}/>)}</p>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <a class="card-link" href="animal.html">
                                <div class="card card-container mb-4 shadow-sm">
                                    <img class="card-foto" src="assets/p1.jpeg" alt="Jacinta" title="Perro en adopcion"></img>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="card-title">Jacinta</div>
                                            <small class="text-muted"><img src="assets/icons/ico-dog.png" width="50" height="50"
                                                class="d-inline-block align-right" alt="Dog"></img></small>
                                        </div>
                                        <div class="container-card-list-group">
                                            <ul class="card-list-group">
                                                <li class="card-list-group-item"><strong>Sabueso</strong></li>
                                                <li class="card-list-group-item">Hembra</li>
                                                <li class="card-list-group-item">Reducto</li>
                                            </ul>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <form>
                                                <button type="submit" class="btn btn-primary mb-2">Lo quiero conocer</button>
                                            </form>
                                            <small class="text-muted"><img src="assets/icons/ico-love.png" width="30" height="30"
                                                class="d-inline-block align-center" alt="Favoritos"></img></small>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Animal;