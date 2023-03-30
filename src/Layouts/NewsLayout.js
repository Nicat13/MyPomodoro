import React from 'react'

export default function NewsLayout({ children, error }) {
    return (
        <>
            Selected Layout: NewsLayout
            <br />
            <br />
            HEADER
            {children}
            {error && <p>{error}</p>}
            FOOTER
        </>
    )
}
