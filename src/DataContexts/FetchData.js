import { ContextResult } from '../Models/ContextResult'

export default async function FetchData(url) {
    let response = null;
    await fetch(url)
        .then(res => {
            if (!res.ok) {
                return new ContextResult(null, true, 'Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            response = data;
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            }
            return new ContextResult(null, true, err.name);
        })
    return new ContextResult(response, false, 'OK');;
}