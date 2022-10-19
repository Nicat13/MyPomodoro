import { React, useEffect, useState } from 'react';

export default function Home({ layout }) {
    const SELECTED_LAYOUT = 'NewsLayout';

    useEffect(() => {
        layout(SELECTED_LAYOUT);
    })

    return (
        <div>Home page</div>
    )
}
