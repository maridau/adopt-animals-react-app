import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Animal from './Animal.js';
import ListAnimal from './ListAnimal.js';
import Register from './Register.js';
import Favorites from './Favorites';
import Blog from './Blog.js';
import { baseAnimals } from './baseAnimals.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 1,
      currentAnimal:0,
      baseAnimals
    };
    this.handleAddAnimal = this.handleAddAnimal.bind(this);
  }

  handleAddAnimal(animalitem) {
    this.setState({
      baseAnimals: [...this.state.baseAnimals, animalitem]
    });
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
  goToAnimal = (animalId) => {
    this.setState({
      section: 5,
      currentAnimal: animalId
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
      return <Register onAddAnimal={this.handleAddAnimal} />;
    }

    if (this.state.section === 3) {
      return <Favorites />;
    }

    if (this.state.section === 4) {
      return <Blog />;
    }

    if (this.state.section === 5) {
      return <Animal animalItem ={this.state.baseAnimals.find(item =>item.id===this.state.currentAnimal)}/>;
    }
  }


  render() {

    return (
      <main>
        <Header 
        goToListAnimals={this.goToListAnimals}
        goToRegister={this.goToRegister}
        goToFavorites={this.goToFavorites}
        goToBlog= {this.goToBlog}
        />

        {this.currentSection()}
        <Footer />

      </main>
    );
  }
}

export default App;
