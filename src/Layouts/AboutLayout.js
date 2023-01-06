import React from 'react'

export default function AboutLayout({ children, error }) {
    return (
        <>
            Selected Layout: AboutLayout
            <br />
            <br />
            HEADER
            {children}
            {error && <p>{error}</p>}
            FOOTER
        </>
    )
}
