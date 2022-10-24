import { React, useEffect, useState } from 'react';

export default function Info({ layout, setLayout }) {
    const SELECTED_LAYOUT = 'AboutLayout';

    useEffect(() => {
        if (SELECTED_LAYOUT === layout) {
            //states
        }
        setLayout(SELECTED_LAYOUT);
    })

    return (
        <div>Info page</div>
    )
}
