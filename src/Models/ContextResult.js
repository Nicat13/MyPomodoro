export class ContextResult {
    constructor(data, isError, message) {
        this.data = data;
        this.isError = isError;
        this.Message = message;
    }
    getMessage() {
        return this.Message;
    }
}