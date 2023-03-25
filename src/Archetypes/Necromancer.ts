import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static numberOfInstances = 0;
  private _damageType:EnergyType;
  constructor(name:string) {
    super(name);
    this._damageType = 'mana';
    Necromancer.numberOfInstances += 1;
  }
      
  get energyType():EnergyType {
    return this._damageType;
  }
      
  static createdArchetypeInstances() {
    return Necromancer.numberOfInstances;
  }
}
      
export default Necromancer;