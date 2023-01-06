import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Pages
import Home from '../Pages/Home'
import Info from '../Pages/Info'

export default function Body() {
    console.log('body init');
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </Router>
    )
}
