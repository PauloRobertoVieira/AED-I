export interface Player {
  username: string;
  score: number;
  hitWords?: number;
}

export default class List {
  private data: string[];

  constructor(data?: string[]) {
    this.data = data || [];
  }

  size(): number {
    return this.data.length;
  }

  add(value: string): void {
    this.data.push(value);
  }

  get(index: number): string {
    return this.data[index];
  }

  getAll(): string[] {
    return this.data;
  }
}
