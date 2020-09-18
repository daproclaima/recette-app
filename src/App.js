import React, { Component } from 'react'
// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// recipes
import recettes from './recettes'

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = {...this.state.recettes};
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({recettes})
  };

  majRecette = (key, newRecette) => {
    const recettes = {...this.state.recettes};
    recettes[key] = newRecette;
    this.setState({recettes})
  };

  supprimerRecette = key => {
    const recettes = {...this.state.recettes};
    recettes[key] = null;
    this.setState({recettes})
  };

  chargerExemple = () => this.setState({ recettes });

  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]}/>);

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        {cards}
        <Admin recettes={this.state.recettes}
               pseudo={this.state.pseudo}
               supprimerRecette={this.supprimerRecette}
               ajouterRecette={this.ajouterRecette}
               majRecette={this.majRecette}
               chargerExemple={this.chargerExemple}/>
      </div>
    )
  }
}

export default App
