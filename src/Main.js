import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Cards } from 'react-bootstrap';
import styled from 'styled-components';

export const Main = () => {
    return (
        <div>
            class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
      <input
        type="number"
        value={this.state.value}
        onChange={e => this.onChange(parseInt(e.target.value || 0))}
      />
      <Carousel
        value={this.state.value}
        onChange={this.onChange}
        slides={[
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516985/shutterstock_280679357-1600x600_vyarqx.jpg' />),
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516939/photo-1518791841217-8f162f1e1131_x9ejla.jpg' />),
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516950/can-dogs-sense-a-good-person_training_ouoawr.jpg' />),
        ]}
        arrows
        clickToChange
      />

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/*  HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS*/}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/*  HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS*/}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/*  HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS*/}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/*  HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS*/}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    );
  }
}
        </div>
    )
} 
