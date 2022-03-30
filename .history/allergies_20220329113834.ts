export class Allergies {
  score:number
  listAllergies = new Map<string, number>();
  constructor(allergenIndex: number) {
    this.score = allergenIndex;
    this.listAllergies.set("eggs", 1);
    this.listAllergies.set("peanuts", 2);
    this.listAllergies.set("shellfish", 4);
    this.listAllergies.set("strawberries", 8);
    this.listAllergies.set("tomatoes", 16);
    this.listAllergies.set("chocolate", 32);
    this.listAllergies.set("pollen", 64);
    this.listAllergies.set("cats", 128);
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
