import {Findable, Data} from '../interfaces/Findable';
import words from '../../data/words/word-list.json';

export default class FindWordInJson implements Findable {
  findWord(letter: string, index: number): string {
    const word: string | undefined = this.wordListByLetter(letter)?.word[index];
    return word || '';
  }

  wordListByLetter(letter: string): Data | undefined {
    return words.find((data) => data.letter === letter);
  }

  sizeWordListByLetter(letter: string): number {
    return this.wordListByLetter(letter)?.word.length || -1;
  }
}
