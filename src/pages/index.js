import React, { Component } from 'react';
import Link from 'gatsby-link';

class IndexPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <Link to="/about/">About Me</Link>
      </div>
    );
  }
}

export default IndexPage;
