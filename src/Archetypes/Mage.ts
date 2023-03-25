import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static numberOfInstances = 0;
  private _damageType:EnergyType;
  constructor(name:string) {
    super(name);
    this._damageType = 'mana';
    Mage.numberOfInstances += 1;
  }

  get energyType():EnergyType {
    return this._damageType;
  }

  static createdArchetypeInstances() {
    return Mage.numberOfInstances;
  }
}

export default Mage;