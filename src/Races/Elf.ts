import Race from './Race';

class Elf extends Race {
  private _maxLifePoints:number;
  private static _numberOfRaces = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf._numberOfRaces += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Elf._numberOfRaces;
  }
}

export default Elf;