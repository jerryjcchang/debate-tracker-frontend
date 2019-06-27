import React from 'react'
import { Form, Card, Button } from 'semantic-ui-react'

class CardBack extends React.Component {

  state = {
    fp: 3,
    hc: 3,
    ec: 3,
    im: 3,
    gc: 3
  }

  handleChange = (e) => {
    let obj = {}
    let newValue = parseInt(e.target.value)
    let key = e.target.name

    obj[key] = newValue

    this.setState(obj)
  }

  handleReset = () => {
    this.setState({
      fp: 3,
      hc: 3,
      ec: 3,
      im: 3,
      gc: 3
    })
  }

  render(){
    const {fp,hc,ec,im,gc} = this.state

    return(
      <>
      <Card.Content>
      <Form>
        <Form.Field>
        <label>Foreign Policy</label>
        <input name="fp" value={fp} onChange={this.handleChange} type="range" min="1" max="5" step="1" />
        </Form.Field>
        <Form.Field>
        <label>Health Care</label>
        <input name="hc" value={hc} onChange={this.handleChange} type="range" min="1" max="5" step="1" />
        </Form.Field>
        <Form.Field>
        <label>Economy</label>
        <input name="ec" value={ec} onChange={this.handleChange} type="range" min="1" max="5" step="1" />
        </Form.Field>
        <Form.Field>
        <label>Immigration</label>
        <input name="im" value={im} onChange={this.handleChange} type="range" min="1" max="5" step="1" />
        </Form.Field>
        <Form.Field>
        <label>Gun Control</label>
        <input name="gc" value={gc} onChange={this.handleChange} type="range" min="1" max="5" step="1" />
        </Form.Field>
      </Form>
      </Card.Content>
      <Button color="red" onClick={this.handleReset}>Reset</Button>
      </>
    )
  }
}

export default CardBack
