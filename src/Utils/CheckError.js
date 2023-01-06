function CheckError(data, setError) {
    console.log(setError);
    if (data.constructor.name === 'ErrorModel') {
        setError(data)
    }
    else {
        return data
    }
}