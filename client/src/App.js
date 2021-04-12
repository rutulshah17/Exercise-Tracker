import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar.component";
import ExercisesList from "./components/Exercise/Exercises-List/exercisesList.component";
import ExerciseEdit from "./components/Exercise/Exercise-Edit/exercisesEdit.component";
import ExerciseCreate from "./components/Exercise/Exercise-Create/exerciseCreate.component";
import UserCreate from "./components/User/User-Create/userCreate.component";

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={ExerciseEdit} />
      <Route path='/create' component={ExerciseCreate} />
      <Route path='/user' component={UserCreate} />      
    </div>
  );
}

export default App;
