import { buildQueries } from '@testing-library/dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currdate=new Date();

currdate=currdate.getHours();
let dynamic='';
const  guriyaStyle=
{ };
if(currdate>=1&&currdate<12)
{
dynamic='Good Morning';
guriyaStyle.color="orange";
}

else if(currdate>=12&&currdate<5)
{
  dynamic='Good Afternoon';
  guriyaStyle.color="yellow";

}
else{
  dynamic='Good Night';
  guriyaStyle.color="blue";

}

ReactDOM.render(
  <>
  <div className="guriya">
  <h1>Hello Sir,<span style={guriyaStyle}>{dynamic}</span></h1>,
  </div>
  </>,
  document.getElementById('root')
);