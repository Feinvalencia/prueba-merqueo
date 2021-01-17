import React from 'react';
import './styles.scss';
import FormState from '../Form';
import Post from '../Comments';
import NavBar from '../Navbar';

export default function Content() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <FormState />
      </div>
      <div className="content">
        <Post />
      </div>
    </div>
  );
}
