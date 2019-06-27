import React from 'react'
import CardBack from './CardBack'
import { Card, Button, Image } from 'semantic-ui-react'

class CandidateCard extends React.Component {

  state = {
    showBack: false,
  }

  render(){
    const {handleChange, candidate} = this.props
    const { name, img_url, poll, age, title } = candidate
    return(
      <Card
        onMouseEnter={() => {this.setState({showBack: true})}}
        onMouseLeave={() => {this.setState({showBack: false})}}
      >
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{title}</Card.Meta>
        </Card.Content>
          {
            !this.props.allBack ?
            <>
            <Image id="candidate-img" centered size="tiny" src={img_url} />
            <Card.Content extra>
            <p>Poll Average: {poll+"%"}</p>
            <p>Age: {age}</p>
            </Card.Content>
            </>
            :
            <CardBack ratings={candidate} handleChange={handleChange} />
          }
       </Card>
    )
  }
}

export default CandidateCard
