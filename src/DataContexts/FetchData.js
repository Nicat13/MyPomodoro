import { ErrorModel } from '../Models/ErrorModel'

export default async function FetchData(url) {
    let response = null;
    await fetch(url)
        .then(res => {
            if (!res.ok) {
                return new ErrorModel('Could not fetch the data for that resource');
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
            return new ErrorModel(err.name);
        })
    return response;
}