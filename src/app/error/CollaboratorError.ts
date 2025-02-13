import { Response } from "express";
export class SafeError extends Error {
  readonly status: number;
  constructor(message: string, status: number = 400) {
    super(message);
    this.status = status;
  }
  logError(): void {
    console.error(`[${new Date().toISOString()}] Error: ${this.message}`);
  }
  sendErrorResponse(res: Response): void {
    res.status(this.status).json({
      success: false,
      message: this.message,
    });
  }
}
