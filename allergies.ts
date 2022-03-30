export class Allergies {
  listAllAllergies = new Map<string, number>();
  listAllergies = new Map<string, number>();
  constructor(allergenIndex: number) {
    this.listAllAllergies.set("cats", 128);
    this.listAllAllergies.set("pollen", 64);
    this.listAllAllergies.set("chocolate", 32);
    this.listAllAllergies.set("tomatoes", 16);
    this.listAllAllergies.set("strawberries", 8);
    this.listAllAllergies.set("shellfish", 4);
    this.listAllAllergies.set("peanuts", 2);
    this.listAllAllergies.set("eggs", 1);
    while (allergenIndex > 0) {
      for (var [key, value] of this.listAllAllergies) {
        if (value <= allergenIndex) {
          allergenIndex = allergenIndex - value;
          this.listAllergies.set(key, value);
          break;
        }
      }
    }
  }
  public list(): string[] {
    let array: string[] = [];
    for (let [key] of this.listAllergies) array.push(key);
    return array.reverse();
  }
  public allergicTo(allergen: string): boolean {
    return this.listAllergies.has(allergen);
  }
}