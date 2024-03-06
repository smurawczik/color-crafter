export function logWithColor(message: string, color: string): void {
  console.log(`%c${message}`, `color: ${color}`);
}
