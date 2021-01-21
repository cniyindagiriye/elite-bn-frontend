import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/index';
import {decreement, increement} from './actions';
import {useSelector,useDispatch} from 'react-redux';


function App() {
  const counter = useSelector( state => state.counter);
 const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
        <Routes />
        <h2>counter{counter}</h2>
        <div className="space-x-4">
        <button onClick ={() => dispatch(increement())} className="bg-red-400 text-white p-2 rounded">add</button>
       <button onClick={() => dispatch(decreement())} className="bg-blue-400 text-white p-2 rounded">minus</button>
       </div>
      </div>
    </Router>
  );
}
export default App;
