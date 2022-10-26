import { React, useEffect, useState } from 'react';
import ErrorBoundary from '../Utils/ErrorBoundary'
import BodyComponent from './Body'
//layouts
import NewsLayout from '../Layouts/NewsLayout'
import AboutLayout from '../Layouts/AboutLayout'




export default function Main() {
    const [selectedLayout, setSelectedLayout] = useState(null);
    const [hasError, setHasError] = useState(null);

    let layouts = [NewsLayout, AboutLayout]
    let Body = () => <BodyComponent layout={selectedLayout} setLayout={setSelectedLayout} setError={setHasError} error={hasError} />
    let Layout = layouts.find(obj => obj.name === selectedLayout);
    useEffect(() => {
        if (hasError) {
            console.log(hasError)
        }
    }, [hasError])

    return (
        <>
            {!selectedLayout && <Body />}
            {selectedLayout && <Layout Body={Body} error={hasError} />}
        </>
    )
}
