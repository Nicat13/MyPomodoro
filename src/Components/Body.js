import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Pages
import Home from '../Pages/Home'
import Info from '../Pages/Info'

export default function Body({ layout, setLayout }) {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home layout={layout} setLayout={setLayout} />} />
                <Route path='/info' element={<Info layout={layout} setLayout={setLayout} />} />
            </Routes>
        </Router>
    )
}
