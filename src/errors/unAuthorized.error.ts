export class Unauthorized extends Error {
    private statusCode;

    constructor(message: string) {
        super();

        this.message = message;
        this.name = 'Unauthorized';
        this.statusCode = 401;
    }

    getStatusCode() {
        return this.statusCode;
    }
}