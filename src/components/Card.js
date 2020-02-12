import React from "react";
import CardBack from "./CardBack";
import { Card, Button, Image, Icon } from "semantic-ui-react";

class CandidateCard extends React.Component {
  state = {
    showBack: false
  };

  toggleCard = () => {
    const { showBack } = this.state;
    this.setState({ showBack: !showBack });
  };

  render() {
    const { handleChange, candidate, reset, allBack } = this.props;
    const { name, img_url, poll, age, title, id } = candidate;
    const { showBack } = this.state;
    return (
      <Card className="cand-card">
        <Card.Content id="header-div">
          <Card.Header id="card-header">{name}</Card.Header>
          <Card.Meta id="meta">{title}</Card.Meta>
        </Card.Content>
        {!showBack ? (
          <>
            <Image
              id={`candidate-img-${id}`}
              className="cand-img"
              centered
              size="tiny"
              src={img_url}
            />
            <Card.Content id="card-footer" extra align="left">
              <p>
                <Icon name="thumbs up outline" />
                Poll Average: {poll + "%"}
              </p>
              <p>
                <Icon name="birthday cake" />
                Age: {age}
              </p>
              <div className="btn-div">
                <Button
                  onClick={this.toggleCard}
                  color="blue"
                  className="details-btn"
                >
                  Show Details
                </Button>
              </div>
            </Card.Content>
          </>
        ) : (
          <CardBack
            ratings={candidate}
            reset={reset}
            handleChange={handleChange}
            toggleCard={this.toggleCard}
          />
        )}
      </Card>
    );
  }
}

export default CandidateCard;
