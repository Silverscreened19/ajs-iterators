export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    this.current = 0;
    this.last = this.characters.length;

    return {
      next: () => {
        if (this.current < this.last) {
          this.current += 1;
          return { value: this.characters[this.current], done: false };
        }
        return { done: true };
      },
    };
  }
}
