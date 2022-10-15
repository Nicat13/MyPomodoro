import { React, useEffect, useState } from 'react';
import NewsLayout from '../Layouts/NewsLayout'
import AboutLayout from '../Layouts/AboutLayout'
import Body from './Body'

export default function Main() {
    const [selectedLayout, setSelectedLayout] = useState(null);
    let layouts = [NewsLayout, AboutLayout]
    let BodyComponent = () => <Body layout={setSelectedLayout} />
    let Layout = layouts.find(obj => obj.name === selectedLayout);

    return (
        <>
            {!selectedLayout && <BodyComponent />}
            {selectedLayout && <Layout Body={BodyComponent} />}
        </>
    )
}
