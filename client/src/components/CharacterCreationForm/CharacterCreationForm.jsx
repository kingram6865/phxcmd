 import React, { Component } from 'react'
 import './CharacterCreationForm.css'
 import Header from '../shared/Header/Header'
 import Footer from '../shared/Footer/Footer'


 export default class CharacterCreationForm extends Component {

  submitAction() {
    alert("Submit Fired")
  }

  render () {
    return (
      <>
        <Header />
        <form onSubmit={this.submitAction}>
          <label for="charcter_name">Character Name</label>
          <input name="character_name"  placeholder="Character Name" /><br />
          <label for="player_name">Player Name</label>
          <input name="player_name" placeholder="Player Name" /><br />
          <label for="strength">Strength</label>
          <input name="strength" type="text"  placeholder="Strength" /><br />
          <label for="intelligence">Intelligence</label>
          <input name="intelligence" type="text"  placeholder="Intelligence" /><br />
          <label for="Will">Will</label>
          <input name="will" type="text"  placeholder="Will" /><br />
          <label for="Health">Health</label>
          <input name="health" type="text"  placeholder="Health" /><br />
          <label for="Agility">Agility</label>
          <input name="agility" type="text"  placeholder="Agility" /><br />
          <button>Submit</button>
        </form>
      </>
    )
  }
 }