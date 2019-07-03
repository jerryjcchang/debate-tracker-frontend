import React from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data'
import CandidateCard from './components/Card'
import { Card, Button, Image } from 'semantic-ui-react'
import SweetAlert from 'sweetalert-react'
const URL = 'https://debate-trackr-backend.herokuapp.com/api/v1'
const CANDIDATES = `${URL}/candidates`

class App extends React.Component {

  state = {
    candidates: [],
    showAllBack: false
  }

  componentDidMount(){
    this.getCandidates()
  }

  getCandidates = () => {
    fetch(CANDIDATES)
    .then(r => r.json())
    .then(d => this.setState({candidates: d}))
  }

  handleAllBack = () => {
    this.setState({
      showAllBack: !this.state.showAllBack
    })
  }

  handleChange = (e) => {
    let obj = {}
    let newValue = parseInt(e.target.value)
    let key = e.target.name

    obj[key] = newValue

  }

  updateCandidate = (e, id) => {
    let value = parseInt(e.target.value)
    let key = e.target.name

    let data = {
      key,
      value
    }

    let configObj = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(`${CANDIDATES}/${id}`, configObj)
    .then(r => r.json())
    .then((d) => {
        this.addUpdatedCandidateToState(d)
      })
  }

  resetCandidate = (id) => {
    fetch(`${CANDIDATES}/${id}/reset`,
    { method: "PATCH",
      headers: {
        'Content-Type':'application/json'
      },
    })
    .then(r => r.json())
    .then((d) => this.addUpdatedCandidateToState(d))
  }

  addUpdatedCandidateToState = (d) => {
    let {candidates} = this.state
    let candidatesCopy = JSON.parse(JSON.stringify(candidates))
    let x = candidatesCopy.map((c,index) => {
      if(c.id === d.id){
        return d
      } else {
        return c
      }
    })

    this.setState({
      candidates: x
    })

  }

  render(){
    return (
      <div className="App">
        <Image src="https://i.imgur.com/PyBQpa2.png" alt="logo" size="medium" centered/>
        <Button id="details-btn" color="blue" onClick={this.handleAllBack}>{!this.state.showAllBack ? "Show Details" : "Show Profile"}</Button>
        <Card.Group doubling itemsPerRow={4}>
          {this.state.candidates.map((c,i) =>
          <CandidateCard handleChange={this.updateCandidate} index={i} candidate={c} reset={this.resetCandidate} allBack={this.state.showAllBack} />)}
        </Card.Group>
      </div>
    )
  }
}

export default App;
