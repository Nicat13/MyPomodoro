export class ErrorModel {
    constructor(message) {
        this.Message = message;
    }
    getMessage() {
        return this.Message;
    }
}