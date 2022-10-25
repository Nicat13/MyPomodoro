export default async function FetchData(url) {
    let response = null;
    await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
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
        })
    return response;
}