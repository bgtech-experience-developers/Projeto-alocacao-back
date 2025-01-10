export class SchoolError extends Error {
    status;
    constructor(message, status = 400) {
        super(message);
        this.status = status;
    }
}
//# sourceMappingURL=SchoolError.js.map