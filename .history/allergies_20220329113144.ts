export class Allergies {
  score:number

  constructor(allergenIndex: number) {
    this.score = allergenIndex;
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
