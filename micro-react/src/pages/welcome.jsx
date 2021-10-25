import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This is a React application.</p>
      <div>
        <Link to={'/counter'}>Start Counting</Link>
      </div>
    </div>
  );
}
