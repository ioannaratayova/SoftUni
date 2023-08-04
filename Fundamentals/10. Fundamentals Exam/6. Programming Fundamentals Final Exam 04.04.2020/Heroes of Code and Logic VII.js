function heroesOfCodeNLogic(arr) {
    function createHero(heroName, heroHp, HeroMana) {
        let hero = {
            name: heroName,
            hp: heroHp,
            mana: HeroMana, 
            castSpell(mpNeeded, spellName) {
                if (this.mana >= mpNeeded) {
                    this.mana -= mpNeeded;
                    console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mana} MP!`);
                }
                else {
                    console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
                }
            },
            takeDamage(damage, attacker) {
                if (this.hp - damage > 0) {
                    this.hp -= damage;
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
                }
                else {
                    console.log(`${this.name} has been killed by ${attacker}!`);
                    map.delete(this.name);
                }
            },
            recharge(amount) {
                let difference = Math.min(200 - this.mana, amount);
                this.mana += difference;
                console.log(`${this.name} recharged for ${difference} MP!`);
            },
            heal(amount) {
                let difference = Math.min(100 - this.hp, amount);
                this.hp += difference;
                console.log(`${this.name} healed for ${difference} HP!`);
            },
            toString() {
                console.log(`${this.name}\n  HP: ${this.hp}\n  MP: ${this.mana}`);
            }
        }
        return hero;
    }
    let numOfHeroes = Number(arr.shift());
    let map = new Map();
    for (let i = 0; i < numOfHeroes; i++) {
        let tokens = arr[i].split(" ");
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mana = Number(tokens[2]);
        let hero = createHero(name, hp, mana);
        map.set(name, hero);
    }
    let commandsArr = arr.slice(numOfHeroes);
    for (let i = 0; i < commandsArr.length; i++) {
        let tokens = commandsArr[i].split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let values = tokens.slice(2);
        switch(command) {
            case 'CastSpell':{
                let hero = map.get(name); 
                let mpNeeded = Number(values[0]);
                let spellName = values[1];
                hero.castSpell(mpNeeded, spellName);
                break;
            } 
            case 'TakeDamage': {
                let hero = map.get(name); 
                let damage= Number(values[0]);
                let attacker = values[1];
                hero.takeDamage(damage, attacker);
                break;
            } 
            case 'Recharge': {
                let hero = map.get(name); 
                let amount = Number(values[0]);
                hero.recharge(amount);
                break;
            }
            case 'Heal':{
                let hero = map.get(name); 
                let amount = Number(values[0]);
                hero.heal(amount);
                break;
            }
            case 'End': {
                for (let hero of map.values()) {
                    hero.toString();
                }
                return;
            }
        }
    }
}