import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar.component";
import ListExercises from "./components/Exercise/List-Exercises/listExercises.component";
import EditExercise from "./components/Exercise/Edit-Exercise/editExercise.component";
import CreateExercise from "./components/Exercise/Create-Exercise/createExercise.component";
import CreateUser from "./components/User/Create-User/createUser.component";

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Route path='/' exact component={ListExercises} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />      
    </div>
  );
}

export default App;
