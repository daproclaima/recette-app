// import React, { Component } from 'react'
// // CSS
// import './App.css'
//
// // Components
// import Header from './components/Header'
// import Admin from './components/Admin'
// import Card from './components/Card'
//
// import withFirebase from "./hoc/withFirebase";

// class App extends Component {
  // props needed as our class Extends Component but verbose method...
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     pseudo: this.props.match.params.pseudo
  //   }
  //   console.log('constructor')
  // }

//   render () {
//     const cards = Object.keys(this.props.recettes)
//       .map(key => <Card key={key} details={this.props.recettes[key]}/>);
//
//     return (
//       <div className='box'>
//         <Header pseudo={this.state.pseudo} />
//         {cards}
//         <Admin recettes={this.props.recettes}
//                pseudo={this.props.pseudo}
//                supprimerRecette={this.props.supprimerRecette}
//                ajouterRecette={this.props.ajouterRecette}
//                majRecette={this.props.majRecette}
//                chargerExemple={this.props.chargerExemple}/>
//       </div>
//     )
//   }
// }

// v2 refactor
import React from 'react'
// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from "./hoc/withFirebase";
import PropTypes from 'prop-types'

import ColorContext from "./components/Color";

const App = ({
   recettes,
   match,
   pseudo,
   supprimerRecette,
   ajouterRecette,
   majRecette,
   chargerExemple
  }) => {
  const cards = Object.keys(recettes)
      .map(key => <Card key={key} details={recettes[key]}/>);

  return (
      // We load the context we need to consume. but the rest happens in Header component
      <ColorContext>
        <div className='box'>
          <Header pseudo={match.params.pseudo} />
          { cards }
          <Admin recettes={recettes}
                 pseudo={pseudo}
                 supprimerRecette={supprimerRecette}
                 ajouterRecette={ajouterRecette}
                 majRecette={majRecette}
                 chargerExemple={chargerExemple}/>
        </div>
      </ColorContext>
  )
}
const WrappedComponent = withFirebase(App)

// check var type with prop-type package. It is the first way to debug app. Totally required when build huge apps!
// PropTypes.{array, bool, func, number, object, string, symbol}
// PropTypes.{isRequired, instanceOf, oneOf, oneOfType, arrayOf, objectOf, shape}
App.propTypes = {
  recettes: PropTypes.object.isRequired,
  pseudo: PropTypes.string.isRequired,
  supprimerRecette: PropTypes.func.isRequired,
  ajouterRecette: PropTypes.func.isRequired,
  majRecette: PropTypes.func.isRequired,
  chargerExemple: PropTypes.func.isRequired

}

// ContextApi: to face pb of components converting props from a component embedded in components embedded in etc...

export default WrappedComponent
