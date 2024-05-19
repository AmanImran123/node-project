import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Player {
    name;
    health;
    energy;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.energy = 100;
    }
    getHealth() {
        return this.health;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseHealth(amount) {
        this.health -= amount;
        if (this.health < 0) {
            console.log(`${this.name} has been defeated! Game over.`);
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.health} health left.`);
        }
    }
    decreaseEnergy(amount) {
        this.energy -= amount;
        if (this.energy <= 0) {
            console.log(`${this.name} has been defeated! Game over.`);
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.energy} energy left.`);
        }
    }
}
class Monster {
    name;
    health;
    constructor(name) {
        this.name = name;
        this.health = 50;
    }
    getHealth() {
        return this.health;
    }
    attack(player) {
        const damage = Math.floor(Math.random() * 10) + 1;
        player.decreaseHealth(damage);
    }
}
const player = new Player("Hero");
const monster = new Monster("Drogan");
function battle() {
    rl.question("Press enter to attack:", () => {
        const playerAttack = Math.floor(Math.random() * 20) + 1;
        const energyConsumption = Math.floor(Math.random() * 5) + 1;
        player.decreaseEnergy(energyConsumption);
        class Player {
            name; // changed from private to public
            health;
            energy;
            constructor(name) {
                this.name = name;
                this.health = 100;
                this.energy = 100;
            }
        }
        monster.attack(player);
        if (monster.getHealth() > 0 && player.getEnergy() > 0) {
            console.log(`=========`);
            console.log(`Next Round:`);
            console.log(`Player's Health: ${player.getHealth()}`);
            console.log(`Player's Energy: ${player.getEnergy()}`);
            console.log(`Monster's Health: ${monster.getHealth()}`);
            console.log(`=========`);
            battle();
        }
    });
}
battle();
