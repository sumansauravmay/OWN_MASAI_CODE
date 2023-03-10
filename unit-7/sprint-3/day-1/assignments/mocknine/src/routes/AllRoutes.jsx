import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Quiz from '../pages/Quiz';
import User from '../pages/User';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<User/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes;

