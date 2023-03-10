import React from 'react';
import ReactDOM from 'react-dom';
import {add,subs,mult,div} from "./Cal"

ReactDOM.render(
  <>
    <ul>
      <li>sum of two number is {add(33,3)}</li>
      <li>diff of two number is {subs(33,7)}</li>
      <li>multiplication of two number is {mult(33,3)}</li>
      <li>division of two number is {div(33,7)}</li>
    </ul>
  </>,
  document.querySelector("#root")
)