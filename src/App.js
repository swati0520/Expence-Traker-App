
import './App.css';
import ExpenseTracker from './ExpenseTracker';

import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  return (
<div className='App'>

<BrowserRouter>
<Routes>
  <Route  path = '/' element = {<ExpenseTracker/>} />




</Routes>

</BrowserRouter>

</div>



 
  );
}

export default App;
