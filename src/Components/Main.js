import { React, useEffect, useState } from 'react';
import BodyComponent from './Body'
//layouts
import NewsLayout from '../Layouts/NewsLayout'
import AboutLayout from '../Layouts/AboutLayout'

export default function Main() {
    const [selectedLayout, setSelectedLayout] = useState(null);
    let layouts = [NewsLayout, AboutLayout]
    let Body = () => <BodyComponent layout={selectedLayout} setLayout={setSelectedLayout} />
    let Layout = layouts.find(obj => obj.name === selectedLayout);
    return (
        <>
            {!selectedLayout && <Body />}
            {selectedLayout && <Layout Body={Body} />}
        </>
    )
}
