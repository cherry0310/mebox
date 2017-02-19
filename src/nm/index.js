import React from 'react';
import {render} from 'react-dom';

 import App from './components/App';
//import QualityCourse from './components/QualityCourse';

function run(){
  render(
    <App />,
    document.getElementById("root")
  );
}

run();
