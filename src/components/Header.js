import React from 'react'

import { ColorContext} from "./Color";

const Header = ({ pseudo }) => {
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}`:  `de ${pseudo}`
  return (
      // we set the Header to be able consuming the given context
      <ColorContext.Consumer>
          { context => (
              // now we have it consuming it
              <header style={{ backgroundColor: context.state.color}}>
                <h1>La boîte à recette {formatPseudo(pseudo)}</h1>
              </header>
          )}
      </ColorContext.Consumer>
  )
}

export default Header
