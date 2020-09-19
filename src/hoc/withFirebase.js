import React, {Component} from 'react';
import recettes from "../recettes";
import base from "../base";
import Admin from "../components/Admin";

// with this HOC, App is easier to read by devs and we can refactor it v2

const withFirebase = WrappedComponent => (
    class HOC extends Component {
        state = {
          pseudo: this.props.match.params.pseudo,
          recettes: {},
          update: false
        };

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

        componentDidMount () {
            // here place call to other services needed to provide data like fetch or axios
            this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
                context: this,
                state: 'recettes'
            })
            console.log('didMount')
        }

        componentDidUpdate() {
            // infinite loop if we do
            // this.setState()
            // except
            if (this.state.update === false) {
                const update = true
                this.setState( {update} )
                console.log('didUpdate')
            }
        }

        componentWillUnmount () {
            // Used for deleting the connections to db and apis mounted
            base.removeBinding(this.ref)
            //  console.log('WillUnmount') will not show as unmount means closing this app
        }

        render() {
            return (
                <WrappedComponent
                    recettes={this.state.recettes}
                    pseudo={this.state.pseudo}
                    supprimerRecette={this.supprimerRecette}
                    ajouterRecette={this.ajouterRecette}
                    majRecette={this.majRecette}
                    chargerExemple={this.chargerExemple}
                    {...this.props}
                />

            );
        }
    }
)


export default withFirebase;
