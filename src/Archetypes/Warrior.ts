import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static numberOfInstances = 0;
  private _damageType:EnergyType;
  constructor(name:string) {
    super(name);
    this._damageType = 'stamina';
    Warrior.numberOfInstances += 1;
  }
    
  get energyType():EnergyType {
    return this._damageType;
  }
    
  static createdArchetypeInstances() {
    return Warrior.numberOfInstances;
  }
}
    
export default Warrior;