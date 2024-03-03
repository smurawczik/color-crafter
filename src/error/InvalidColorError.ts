import { CustomError } from "./CustomError";

export class InvalidColorError extends CustomError {
  constructor(message: string, public readonly color?: string | null) {
    super(message);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidColorError.prototype);
  }
}
