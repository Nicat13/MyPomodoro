import { React, useEffect, useState } from 'react';

export default function Info({ layout }) {
    const SELECTED_LAYOUT = 'AboutLayout';

    useEffect(() => {
        layout(SELECTED_LAYOUT);
    })

    return (
        <div>Info page</div>
    )
}
