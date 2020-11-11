// Imports React
import React from 'react';
// Imports Card Component
import { Card } from 'react-bootstrap';

// Exports MovieItem Component
export class MovieItem extends React.Component {
  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <Card>
          <Card.Header>{this.props.movie.Title}</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <img
                src={this.props.movie.Poster}
                width='200'
                height='275'
                alt={this.props.movie.Title}
              />
              <footer className='blockquote-footer'>
                <p>{this.props.movie.Year}</p>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </>
    );
  }
}
