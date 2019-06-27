import React from 'react'
import CardBack from './CardBack'
import { Card, Image } from 'semantic-ui-react'

class CandidateCard extends React.Component {

  state = {
    showBack: false
  }

  render(){
    const { name, img_url, poll, age, title } = this.props.candidate
    return(
      <>
      <div
        onMouseEnter={() => {this.setState({showBack: true})}}
        onMouseLeave={() => {this.setState({showBack: false})}}
        raised
      >
        <>
        <h1>{name}</h1>
        <p>{title}<p>
        </>
          {
            !this.state.showBack ?
            <>
            <Image size="tiny" centered src={img_url} />
            <Card.Content extra textAlign="left">
            <p>Poll Average: {poll+"%"}</p>
            <p>Age: {age}</p>
            </Card.Content>
            </>
            :
            <CardBack />
          }
        </Card>
        </>
    )
  }
}

export default CandidateCard
