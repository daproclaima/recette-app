import React from 'react'
import { Redirect } from 'react-router-dom'
import withPlaceholder from "../hoc/withPlaceholder";

class Connexion extends React.Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
        // <> </> is an other syntax of Fragment not requiring import but not intuitive
        <>
        {/*<Fragment>*/}
          <div className='connexionBox'>
            <form className='connexion' onSubmit={this.goToApp} >
              <h1>Ma Boîte à Recettes</h1>
              <input
                type='text'
                value={this.state.pseudo}
                onChange={this.handleChange}
                placeholder='Nom du Chef'
                pattern='[A-Za-z-]{1,}'
                required />
              <button type='submit'>GO</button>
              <p>Pas de caractères spéciaux.</p>
            </form>
          </div>
          {/*/!*    if <p>Pas de caractères spéciaux.</p> here then Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment*/}
        <p>Pas de caractères spéciaux.</p>
        {/* except if component wrapped in fragment */}
        {/*if we have to respect a given css structure forcing us to put the p here like flex-box, we need to use Fragment */}
      {/*</Fragment>*/}
      </>
    )
  }
}

const WrappedComponent = withPlaceholder(Connexion)

export default WrappedComponent
