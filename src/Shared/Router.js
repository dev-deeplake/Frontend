import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import MyTodo from '../Pages/MyTodo'
import YourTodo from '../Pages/YourTodo'
import Header from '../Components/Header'
import * as style from "../Styles/styles"
import { useState, useEffect } from 'react'

function Router() {
  return (
    <BrowserRouter>
      <style.FlexCenterColumn>
        <style.Layout>
          <Header isLogged={ true }/> 
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/mytodo" element={<MyTodo />}/>
              <Route path="/yourtodo" element={<YourTodo />}/>
          </Routes>
        </style.Layout>
      </style.FlexCenterColumn>
    </BrowserRouter>
  );
}

export default Router;
