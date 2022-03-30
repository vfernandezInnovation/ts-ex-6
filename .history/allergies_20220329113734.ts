export class Allergies {
  score:number
  listAllergies = new Map<string, number>();
  constructor(allergenIndex: number) {
    this.score = allergenIndex;
    this.listAllergies.set("eggs", 1);
    this.listAllergies.set("peanuts", 2);
    this.listAllergies.set("shellfish", 4);
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
