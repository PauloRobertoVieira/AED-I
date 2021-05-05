export function randomLetter(): string {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 1);
}

export function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}
