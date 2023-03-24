import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints:number;
  private static _numberOfRaces = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling._numberOfRaces += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Halfling._numberOfRaces;
  }
}

export default Halfling;