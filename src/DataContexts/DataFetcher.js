export default async function FetchData() {
    let response = null;
    await fetch(`https://jsonplaceholder.typicode.com/users`)
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