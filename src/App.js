import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import FormBuscar from './FormBuscar.js';
import ListAnimal from './ListAnimal.js';
import Register from './Register.js';
import Favorites from './Favorites';
import Blog from './Blog.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 1,
    };
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
      <div className="App">
        <Header />
        <FormBuscar />
        {this.currentSection()}
        <Footer />
      </div>
    );
  }
}

export default App;
