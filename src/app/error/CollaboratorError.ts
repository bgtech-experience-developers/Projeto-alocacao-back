export class CollaboratorError extends Error {
  private status: number;
  private constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
