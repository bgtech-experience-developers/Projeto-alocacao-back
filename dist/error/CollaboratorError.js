export class CollaboratorError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
//# sourceMappingURL=CollaboratorError.js.map