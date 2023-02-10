class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(setSkill) {
    this.skills.push(setSkill)
  }

  showStatus() {
    console.log(`${this.name} status health: ${this.health}, magic: ${this.magic}`)
  }

  attack(index, opponent) {
    if (this.magic >= this.magic && this.health >= 0)
    opponent.health -= 20;
    opponent.magic -= 20;
    console.log(`${this.name} launched attack successfully!`)
    if (opponent.health <= 100 || opponent.magic <= 0)
      console.log(`${opponent.name} is killed!`)
  }

  getMagic() {
    this.magic += 20
    console.log(`${this.name} got 20 magic back`)
  }
}


class AttackSkill {
  constructor(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
  }
}

let Reinger = new Pokemon('Reinger', 60, 50);
let stoning = new AttackSkill('pour', 40, 60);
let Svetalona = new Pokemon('Svetalona', 100, 100);
let blindingPower = new AttackSkill('blindingPower', 50, 50);
let Artemon = new Pokemon('Artemon', 80, 50);
let cursed = new AttackSkill('curses', 40, 60)
let = Tontifon = new Pokemon('Tontifon', 100, 100);
let howl = new AttackSkill('howl', 50, 50);

Reinger.learnAttackSkill('pour');
Artemon.learnAttackSkill('curses');
Svetalona.learnAttackSkill('blindingPower');
Svetalona.attack(0, Artemon);
Tontifon.learnAttackSkill('howl');
Tontifon.attack(0, Artemon);
Artemon.showStatus();
Svetalona.getMagic();
Svetalona.showStatus();
Artemon.attack(0, Tontifon);
Svetalona.getMagic();
Svetalona.showStatus();
Reinger.attack(0, Tontifon);
Svetalona.attack(0, Tontifon);
Reinger.attack(0, Artemon);
Reinger.attack(1, Artemon);
Artemon.showStatus();



