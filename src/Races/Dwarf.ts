import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints:number;
  private static _numberOfRaces = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf._numberOfRaces += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Dwarf._numberOfRaces;
  }
}

export default Dwarf;