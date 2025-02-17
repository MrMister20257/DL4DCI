class NPC {
    constructor(angriffskraft = 25, verteidigung = 25, speed = 0, gun = false, shotgun = false, rifle = false, car = false, west1 = false, west2 = false, west3 = false, health = 100) {
      
      this.angriffskraft = angriffskraft;
      this.verteidigung = verteidigung;
      this.speed = speed;
      this.gun = gun;
      this.shotgun = shotgun;
      this.rifle = rifle;
      this.car = car;
      this.health = health;
      this.west1 = west1;
      this.west2 = west2;
      this.west3 = west3;
    }
  
    isGun() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.gun = true;
        this.angriffskraft += 150;
      }
    }
  
    isShotgun() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.shotgun = true;
        this.angriffskraft += 350;
      }
    }
  
    isRifle() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.rifle = true;
        this.angriffskraft += 1500;
      }
    }
  
    isWest1() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.west1 = true;
        this.verteidigung += 150;
      }
    }
  
    isWest2() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.west2 = true;
        this.verteidigung += 350;
      }
    }
  
    isWest3() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        this.west3 = true;
        this.verteidigung += 1500;
      }
    }
  
    isCar() {
      let chance = Math.floor(Math.random() * (10 - 0 + 1) + 0);
      if (chance >= 5) {
        let chance = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        this.car = true;
        this.speed = chance;
      }
    }
  
    create() {
      this.isGun();
      this.isShotgun();
      this.isRifle();
      this.isCar();
      this.isWest1();
      this.isWest2();
      this.isWest3();
    }
  }
  
  const npcArray = [];
  
  for (let i = 0; i < 30; i++) {
    let npc = new NPC();
    npc.create();
    npcArray.push(npc);
  }
  
  export default npcArray;