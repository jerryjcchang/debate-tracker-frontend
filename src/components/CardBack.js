import React from 'react'
import { Form, Button, Card, Confirm, Popup } from 'semantic-ui-react'

class CardBack extends React.Component {

  state = {
    fp: 3,
    hc: 3,
    ec: 3,
    im: 3,
    gc: 3,
    open: false,
  }

  handleReset = () => {
    this.setState({
      fp: 3,
      hc: 3,
      ec: 3,
      im: 3,
      gc: 3,
      open: false,
    })
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render(){
    const {ratings, handleChange} = this.props
    const {fp, hc, ec, im, gc} = ratings

    return(
      <>
      <Form>
        <Popup
          content={fp}
          trigger={
          <Form.Field>
          <label>Foreign Policy</label>
          <input name="fp" value={fp} onChange={(e) => {handleChange(e, ratings.id)}} type="range" min="1" max="5" step="1" />
          </Form.Field>
          }
          position="top center"
        />
        <Popup
          content={hc}
          trigger={
          <Form.Field>
          <label>Healthcare</label>
          <input name="hc" value={hc} onChange={(e) => {handleChange(e, ratings.id)}} type="range" min="1" max="5" step="1" />
          </Form.Field>
          }
          position="top center"
        />
        <Popup
          content={ec}
          trigger={
          <Form.Field>
          <label>Economy</label>
          <input name="ec" value={ec} onChange={(e) => {handleChange(e, ratings.id)}} type="range" min="1" max="5" step="1" />
          </Form.Field>
          }
          position="top center"
        />
        <Popup
          content={im}
          trigger={
          <Form.Field>
          <label>Immigration</label>
          <input name="im" value={im} onChange={(e) => {handleChange(e, ratings.id)}} type="range" min="1" max="5" step="1" />
          </Form.Field>
          }
          position="top center"
        />
        <Popup
          content={gc}
          trigger={
          <Form.Field>
          <label>Gun Control</label>
          <input name="gc" value={gc} onChange={(e) => {handleChange(e, ratings.id)}} type="range" min="1" max="5" step="1" />
          </Form.Field>
          }
          position="top center"
        />
      </Form>
      <Card.Content extra>
      <Button onClick={this.handleOpen} color="red">Reset</Button>
      </Card.Content>
      <Confirm
        open={this.state.open}
        onCancel={this.handleClose}
        onConfirm={this.handleReset}
        content="Are you sure you want to reset?"/>
      </>
    )
  }
}

export default CardBack
