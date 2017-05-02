import React from 'react';
import ReactDOM from 'react-dom';
import OpeningsBox from './components/OpeningsBox.jsx'

window.onload = function(){
  ReactDOM.render(
    <OpeningsBox />,
    document.getElementById('app')
  );
}
