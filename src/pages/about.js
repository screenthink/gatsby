import React, { Component } from 'react';
import Link from 'gatsby-link';

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default AboutPage;
