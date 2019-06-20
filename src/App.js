import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ListAnimal from './ListAnimal.js';
import Register from './Register.js';
import Favorites from './Favorites';
import ToggleFavorite from './ToggleFavorite';
import Blog from './Blog.js';
import { baseAnimals } from './baseAnimals.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 2,
      baseAnimals
    };
    this.handleAddAnimal=this.handleAddAnimal.bind(this);
  }

  handleAddAnimal(animalitem){
    this.setState({
      baseAnimals:[...this.state.baseAnimals, animalitem]
    });
    console.log('listo, handleAddAnimal app.js');
  }

  goToListAnimals = () => {
    this.setState({
      section: 1
    });
  }

  goToRegister = () => {
    this.setState({
      section: 2
    });
  }

  goToFavorites = () => {
    this.setState({
      section: 3
    });
  }
  goToBlog = () => {
    this.setState({
      section: 4
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <ListAnimal />;
    }

    if (this.state.section === 2) {
      return <Register />;
    }

    if (this.state.section === 3) {
      return <Favorites />;
    }

    if (this.state.section === 4) {
      return <Blog />;
    }
  }


  render() {

    return (
      <main>
        <Header />
        <div id="root" class="btn"><ToggleFavorite/></div>
        <Register onAddAnimal={this.handleAddAnimal}/>
        <ListAnimal/>
        <Footer />
        
      </main>
    );
  }
}

export default App;
