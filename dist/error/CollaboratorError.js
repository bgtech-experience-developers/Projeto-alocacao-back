export class SafeError extends Error {
    status;
    constructor(message, status = 400) {
        super(message);
        this.status = status;
    }
    logError() {
        console.error(`[${new Date().toISOString()}] Error: ${this.message}`);
    }
    sendErrorResponse(res) {
        res.status(this.status).json({
            success: false,
            message: this.message,
        });
    }
}
