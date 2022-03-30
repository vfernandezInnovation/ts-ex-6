export class Allergies {
  score:number
  listAllAllergies = new Map<string, number>();
  constructor(allergenIndex: number) {
    this.score = allergenIndex;
    this.listAllAllergies.set("eggs", 1);
    this.listAllAllergies.set("peanuts", 2);
    this.listAllAllergies.set("shellfish", 4);
    this.listAllAllergies.set("strawberries", 8);
    this.listAllAllergies.set("tomatoes", 16);
    this.listAllAllergies.set("chocolate", 32);
    this.listAllAllergies.set("pollen", 64);
    this.listAllAllergies.set("cats", 128);
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
