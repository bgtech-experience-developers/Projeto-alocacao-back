export class AllError extends Error {
    status;
    constructor(message, status = 400) {
        super(message);
        this.status = status;
    }
}
//# sourceMappingURL=CollaboratorError.js.map