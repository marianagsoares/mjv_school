export class BadRequestError extends Error {
    private statusCode;

    constructor(message: string) {
        super();

        this.message = message;
        this.name = 'BadRequestError';
        this.statusCode = 400;
    }

    getStatusCode() {
        return this.statusCode;
    }
}