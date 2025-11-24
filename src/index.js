import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceAdventure from './components/common/SpaceAdventure';
import './styles/_base.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpaceAdventure />
  </React.StrictMode>
);
