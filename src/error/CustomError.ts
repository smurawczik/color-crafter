export class CustomError extends Error {
  constructor(message: string, public readonly code?: number) {
    super(message);
    this.name = this.constructor.name;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
