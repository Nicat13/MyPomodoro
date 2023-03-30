export class ErrorUtil {

    static async checkError(data, setError) {
        if (data.isError) {
            setError(data.Message)
        }
        else {
            return data
        }
    }

}