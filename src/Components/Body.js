import { React, useEffect, useState } from 'react';
import Home from '../Pages/Home'

export default function Body({ layout }) {
    useEffect(() => {
        layout("NewsLayout");
    })

    return (
        <>
            <Home />
        </>
    )
}
