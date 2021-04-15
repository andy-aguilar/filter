import React, { Component } from 'react'
import CharacterLi from '../components/characterLi'

export default class cardContainer extends Component {
    state = {
        characters: [],
        filteredCharacters: [],
        statusFilter: "all",
        speciesFilter: "all"
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(resp => resp.json())
        .then(characters => this.setState({characters: characters.results, filteredCharacters: characters.results}))
    }

    renderCharacters = () => {
        return this.state.filteredCharacters.map(character => <CharacterLi name={character.name} species={character.species} status={character.status} image={character.image}/>)
    }

    handleChange = (event) => {
        this.setState({statusFilter: event.target.value})
    }

    filterCharacters = () => {
        let filterOptions = {speciesFilter: this.state.speciesFilter, statusFilter: this.state.statusFilter}
        let array = this.state.characters
        for (const option in filterOptions){
            if(filterOptions[option] !== "all"){
                let word = option.split("Filter").join("")
                array = array.filter(char => char[word] === filterOptions[option])
            }
        } 

        this.setState({filteredCharacters: array})
        
        // if(this.state.statusFilter === 'all' && this.state.speciesFilter === 'all'){
        //     this.setState({filteredCharacters: this.state.characters})
        // }
        // else if(this.state.statusFilter === 'all'){
        //     this.setState({filteredCharacters: this.state.characters.filter(char => char.species === this.state.speciesFilter)})
        // }
        // else if(this.state.speciesFilter === 'all'){
        //     this.setState({filteredCharacters: this.state.characters.filter(char => char.status === this.state.statusFilter)})
        // }
        // else{
        //     this.setState({filteredCharacters: this.state.characters.filter(char => char.species === this.state.speciesFilter && char.status === this.state.statusFilter)})
        // }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.filterCharacters()
    }

    handleRadioChange = (e) => {
        this.setState({speciesFilter: e.target.value})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="status">Status:</label>
                    <select name="status" id="status" onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select><br></br>
                    
                    <label for="species">Species:</label>
                    <input type="radio" name="species" value="Human" onClick={this.handleRadioChange}/>Human
                    <input type="radio" name="species" value="Alien" onClick={this.handleRadioChange}/>Alien
                    <input type="radio" name="species" value="all" onClick={this.handleRadioChange}/>Both <br/>


                    <input type="submit" />
                </form>
                <ul>
                    {this.renderCharacters()}
                </ul>
            </div>
        )
    }
}
