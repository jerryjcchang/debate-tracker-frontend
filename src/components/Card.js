import React from 'react'
import CardBack from './CardBack'
import { Card, Button, Image, Icon } from 'semantic-ui-react'

class CandidateCard extends React.Component {

  state = {
    showBack: false,
  }

  render(){
    const {handleChange, candidate, reset} = this.props
    const { name, img_url, poll, age, title, id } = candidate
    return(
      <Card
        onMouseEnter={() => {this.setState({showBack: true})}}
        onMouseLeave={() => {this.setState({showBack: false})}}
        id="card"
      >
        <Card.Content id="header-div">
        <Card.Header id="header">{name}</Card.Header>
        <Card.Meta id="meta">{title}</Card.Meta>
        </Card.Content>
          {
            !this.props.allBack ?
            <>
            <Image id={`candidate-img-${id}`} centered size="tiny" src={img_url} />
            <Card.Content id="card-footer" extra align="left">
            <p><Icon name="thumbs up outline"/>Poll Average: {poll+"%"}</p>
            <p><Icon name="birthday cake"/>Age: {age}</p>
            </Card.Content>
            </>
            :
            <CardBack ratings={candidate} reset={reset} handleChange={handleChange} />
          }
       </Card>
    )
  }
}

export default CandidateCard
