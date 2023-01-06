import { ContextResult } from '../Models/ContextResult'

export default async function PostData(url, body, headers) {
    let response = null;
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
    })
        .then((response) => response.json())
        .then((json) => {
            response = json;
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            }
            return new ContextResult(null, true, err.name);
        });
    return new ContextResult(response, false, 'OK');;
}