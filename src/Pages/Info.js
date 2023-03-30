import { React, useEffect, useState } from 'react';
import NewsLayout from '../Layouts/NewsLayout.js';

export default function Info({ layout, setLayout }) {
    const [error, setError] = useState(null);

    return (
        <NewsLayout error={error}>
            <div>
                info page
            </div>
        </NewsLayout>
    )
}
