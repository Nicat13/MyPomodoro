import React from 'react'

export default function AboutLayout({ Body, error }) {
    return (
        <>
            Selected Layout: AboutLayout
            <br />
            <br />
            HEADER
            <Body />
            {error && <span>error baw verdi</span>}
            FOOTER
        </>
    )
}
