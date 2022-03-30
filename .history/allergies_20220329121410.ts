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


    let scoreTmp:number = this.score;

    while (scoreTmp == 0){
      let aliment:string = getAliment(scoreTmp, this.listAllAllergies)
       this.listAllAllergies.get(aliment)

      this.listAllergies.set(aliment,  this.listAllAllergies.get(aliment));
    }
    
  }

  public list(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: string): boolean {
    return this.listAllergies.has(allergen)
  }
}
function getAliment(score:number, map:Map<string, number>):string{
  let valorAnterior:string = ""
  for (var [key, value] of map) {
    
    if(value = score){
      return key;
    }else if(value > score){
      return valorAnterior;
    }
    valorAnterior = key;
    
  }
  return "null";
}
function countMyAlergies(listAllergies:Map<string, number>):number{
  let total:number = 0;
  for (var [key, value] of listAllergies) {
    total = total + value
  }
  return total;
}



