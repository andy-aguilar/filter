import React, { Component } from 'react'
import CharacterLi from '../components/characterLi'

export default class cardContainer extends Component {
    state = {
        characters: []
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(resp => resp.json())
        .then(characters => this.setState({characters: characters.results}))
    }

    renderCharacters = () => {
        return this.state.characters.map(character => <CharacterLi name={character.name} species={character.species} status={character.status} image={character.image}/>)
    }


    render() {
        return (
            <ul>
                {this.renderCharacters()}
            </ul>
        )
    }
}
