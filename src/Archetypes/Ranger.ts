import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static numberOfInstances = 0;
  private _damageType:EnergyType;
  constructor(name:string) {
    super(name);
    this._damageType = 'stamina';
    Ranger.numberOfInstances += 1;
  }
  
  get energyType():EnergyType {
    return this._damageType;
  }
  
  static createdArchetypeInstances() {
    return Ranger.numberOfInstances;
  }
}
  
export default Ranger;