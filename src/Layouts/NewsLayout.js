import React from 'react'

export default function NewsLayout({ Body, error }) {
    return (
        <>
            Selected Layout: NewsLayout
            <br />
            <br />
            HEADER
            <Body />
            {error && <h4>{error.Message}</h4>}
            FOOTER
        </>
    )
}
