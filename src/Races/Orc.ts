import Race from './Race';

class Orc extends Race {
  private _maxLifePoints:number;
  private static _numberOfRaces = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Orc._numberOfRaces += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances():number {
    return Orc._numberOfRaces;
  }
}

export default Orc;