interface SimpleFighter {
  _lifePoints: number;
  _strength: number;

  attack: (enemy: SimpleFighter) => void;
  
  receiveDamage: (attackPoints:number) => number;
}

export default SimpleFighter;