export class Allergies {
  score:number
  listAllAllergies = new Map<string, number>();
  listAllergies = new Map<string, number>();
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



    let valorAnterior:string[] = [];
    for (var [key, value] of this.listAllAllergies) {
      if(value <= this.score){
        this.listAllergies.set(key, value)
      }else{
        if(this.score == countMyAlergies(this.listAllergies))break;
      }
      valorAnterior = []
      valorAnterior.push(key)
      valorAnterior.push(value+"");
    }
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: string): boolean {
    return this.listAllergies.has(allergen)
  }
}
function countMyAlergies(listAllergies:Map<string, number>):number{
  let total:number = 0;
  for (var [key, value] of listAllergies) {
    total = total + value
  }
  return total;
}



