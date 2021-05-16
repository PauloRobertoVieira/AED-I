export interface Data {
  letter: string;
  word: string[];
}

export interface Findable {
  findWord: (letter: string, index: number) => string;
  wordListByLetter: (letter: string) => Data | undefined;
  sizeWordListByLetter: (letter: string) => number;
}
