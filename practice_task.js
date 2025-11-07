// ============================================================================
// JUNIOR DEVELOPER PROJECT: POKEMON BATTLE SIMULATOR
// ============================================================================
// Build a turn-based battle system where two Pokemon fight until one faints!
// This project will test: Classes, methods, randomness, game logic, and state management
// 
// ESTIMATED TIME: 45-60 minutes
// 
// TO RUN: node practice_task.js
// ============================================================================

console.log("🎮 POKEMON BATTLE SIMULATOR 🎮\n");

// ============================================================================
// PART 1: CREATE THE POKEMON CLASS
// ============================================================================
// TODO: Create a Pokemon class with the following:
// 
// PROPERTIES:
// - name (string)
// - type (string) - e.g., "Fire", "Water", "Grass", "Electric"
// - hp (number) - health points (start with max, e.g., 100)
// - maxHp (number) - maximum health for health bar display
// - attackPower (number) - base damage (e.g., 15-25)
// - moves (array of objects) - each move has: {name, damage, type}
//
// METHODS:
// - attack(targetPokemon, move) - deals damage to target
// - takeDamage(damage) - reduces hp, can't go below 0
// - isAlive() - returns true if hp > 0
// - heal(amount) - restores hp (can't exceed maxHp)
// - displayStats() - shows current HP, status
// - getRandomMove() - returns a random move from the moves array
//
// HINTS:
// - Use a constructor to initialize properties
// - Remember to use 'this' keyword for class properties
// - Math.random() can help with random move selection
// - Prevent HP from going negative or above maxHp

class Pokemon {
    // Your code here
    constructor(name, type, hp, maxHp, attackPower, moves = []) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.maxHp = maxHp;
        this.attackPower = attackPower;
        this.moves = moves;
    }

    attack(targetPokemon, move) {
        const damage = move.damage
        targetPokemon.takeDamage(damage)
    }

    takeDamage(damage) {
        this.hp = this.hp - damage;
        if (this.hp < 0) {
            this.hp = 0;  // Prevent negative HP
        }
    }

    isAlive() {
        return this.hp > 0
    }

    heal(amount) {
        this.hp = this.hp + amount
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp
        }
    }

    displayStats() {
        return {
            name: this.name,
            hp: this.hp,
            maxHp: this.maxHp,
            status: this.isAlive()
        }
    }

    getRandomMove() {
        const randomIndex = Math.floor(Math.random() * this.moves.length);
        return this.moves[randomIndex];
    }

    addMove(move) {
        this.moves.push(move)
    }

}

class Move {
    constructor(name, damage, type) {
        this.name = name;
        this.damage = damage;
        this.type = type;
    }

}


// ============================================================================
// PART 2: CREATE SOME POKEMON WITH MOVES
// ============================================================================
// TODO: Create at least 3-4 different Pokemon
// Each should have 3-4 different moves with varying damage
//
// EXAMPLE STRUCTURE:
// const pikachu = new Pokemon(
//     "Pikachu", 
//     "Electric", 
//     100, 
//     20,
//     [
//         {name: "Thunder Shock", damage: 20, type: "Electric"},
//         {name: "Quick Attack", damage: 15, type: "Normal"},
//         // ... more moves
//     ]
// );
//
// HINTS:
// - Give different Pokemon different HP and attack stats for variety
// - Make move damages vary (some weak but reliable, some strong)
// - Consider type advantages (bonus: implement type effectiveness!)

// Your Pokemon creations here:
const poke_bg = new Pokemon(
    "Blobbagoosh",
    "Moistur",
    200,
    200,
    20,
    [
        new Move(
            "Goosh Sploosh",
            10,
            "Fluid"),

        new Move(
            "Skadoosh",
            40,
            "Kinetic"
        ),

        new Move(
            "Blobba Gobbler",
            30,
            "Choking"
        )
    ]
)

const poke_yag = new Pokemon(
    "Yagatha",
    "Earth",
    200,
    200,
    20,
    [
        new Move(
            "Disgust",
            30,
            "Psychological"
        ),
        new Move(
            "Slap",
            20,
            "Kinetic"
        ),
        new Move(
            "Pepper Spray",
            30,
            "Fluid"
        )
    ]
)



// ============================================================================
// PART 3: CREATE THE BATTLE SYSTEM
// ============================================================================
// TODO: Create a Battle class that manages the fight
//
// PROPERTIES:
// - pokemon1
// - pokemon2
// - turnCount
// - battleLog (array) - keeps history of what happened
//
// METHODS:
// - start() - begins the battle
// - executeTurn(attacker, defender) - one Pokemon attacks
// - checkWinner() - returns the winner or null if battle continues
// - displayBattleState() - shows both Pokemon's current HP
// - simulateBattle() - auto-runs the full battle
//
// HINTS:
// - Alternate turns between pokemon1 and pokemon2
// - After each attack, check if defender is still alive
// - Store battle events in battleLog for replay
// - Use console.log to make it dramatic and fun!

class Battle {
    // Your code here

    constructor(pmOne, pmTwo, turnCount = 0, battleLog = []) {
        this.pmOne = pmOne;           // ✅ Correct order
        this.pmTwo = pmTwo;
        this.turnCount = turnCount;
        this.battleLog = battleLog;
    }

    start() {
        console.log("⚔️  The Battle Begins! ⚔️\n")
        this.battleLog.push("The Battle Begins")  // Add this.

        while (this.pmOne.isAlive() && this.pmTwo.isAlive()) {
            this.turnCount++;
            this.executeTurn();  // No parameter needed
        }

        const winner = this.checkWinner();
        console.log(`\n🏆 ${winner.name} WINS! 🏆`);
    }

    executeTurn() {  // Remove turnCount parameter
        let attacker;
        let defender;
        
        if (this.turnCount % 2 === 1) {  // Use this.turnCount
            attacker = this.pmOne;
            defender = this.pmTwo;
        }
        else {
            attacker = this.pmTwo;
            defender = this.pmOne;
        }

        console.log(`\nTurn ${this.turnCount}:`);
        const move = attacker.getRandomMove();
        attacker.attack(defender, move);
        
        console.log(`${attacker.name} used ${move.name}! Dealt ${move.damage} damage!`);
        console.log(`${defender.name} HP: ${defender.hp}/${defender.maxHp}`);
        
        this.battleLog.push(`Turn ${this.turnCount}: ${attacker.name} used ${move.name}`);
    }

    checkWinner() {  // No parameter needed
    if(this.pmOne.isAlive()) {
        return this.pmOne;
    }
    return this.pmTwo;
}

    displayBattleState() {
        console.log(`\n--- Battle State ---`);
        console.log(`${this.pmOne.name}: ${this.pmOne.hp}/${this.pmOne.maxHp} HP`);
        console.log(`${this.pmTwo.name}: ${this.pmTwo.hp}/${this.pmTwo.maxHp} HP`);
    }

    simulateBattle(attacker, defender) {
        attacker.attack(defender, attacker.getRandomMove())
    }
}


// ============================================================================
// PART 4: ADVANCED FEATURES (BONUS CHALLENGES)
// ============================================================================
// If you finish early, try adding these features:
//
// 1. TYPE EFFECTIVENESS SYSTEM
//    - Water beats Fire (1.5x damage)
//    - Fire beats Grass (1.5x damage)
//    - Grass beats Water (1.5x damage)
//    - Electric beats Water (1.5x damage)
//    Hint: Create a method that calculates damage multiplier
//
// 2. CRITICAL HITS
//    - 10% chance to deal 2x damage
//    Hint: if (Math.random() < 0.1) { damage *= 2 }
//
// 3. SPECIAL MOVES
//    - Some moves could heal instead of attack
//    - Some moves might have accuracy (chance to miss)
//    Hint: Add 'effect' property to moves
//
// 4. STATUS EFFECTS
//    - Poison: deals damage each turn
//    - Paralysis: might skip turn
//    Hint: Add status property to Pokemon class
//
// 5. BETTER UI
//    - ASCII health bars: [████████░░] 80/100
//    - Color coding (may need a package like 'chalk')
//    - Battle summary at the end

// Your bonus features here:




// ============================================================================
// PART 5: RUN THE BATTLE!
// ============================================================================
// TODO: Create Pokemon, set up a battle, and run it!
//
// STEPS:
// 1. Create two Pokemon
// 2. Create a new Battle with those Pokemon
// 3. Run the battle (either turn-by-turn or simulated)
// 4. Display the winner
//
// EXAMPLE OUTPUT GOAL:
// ⚔️  PIKACHU vs CHARIZARD ⚔️
// 
// Turn 1:
// Pikachu used Thunder Shock! Dealt 20 damage!
// Charizard HP: 80/100
// 
// Turn 2:
// Charizard used Flamethrower! Dealt 25 damage!
// Pikachu HP: 75/100
// ...
// 
// 🏆 CHARIZARD WINS! 🏆

// Your battle execution here:
let playerOne = poke_yag
let playerTwo = poke_bg

let daBattle = new Battle(playerOne, playerTwo)
daBattle.start()




// ============================================================================
// TESTING HELPERS
// ============================================================================
// Uncomment these as you build to test individual parts:

// Test Pokemon creation:
// console.log(pikachu);
// pikachu.displayStats();

// Test attack:
// pikachu.attack(charizard, pikachu.moves[0]);
// charizard.displayStats();

// Test battle:
// const battle = new Battle(pikachu, charizard);
// battle.simulateBattle();


// ============================================================================
// HINTS & TIPS
// ============================================================================
/*
COMMON PITFALLS TO AVOID:
1. Forgetting to check if Pokemon is alive before attacking
2. Not preventing HP from going negative
3. Infinite loops if both Pokemon can't damage each other
4. Not using 'this' in class methods

JAVASCRIPT CONCEPTS YOU'LL USE:
- Classes and constructors
- Class methods
- Arrays and array methods
- Objects within arrays
- Random number generation: Math.random() and Math.floor()
- Conditional logic
- Loops (while or for)
- String interpolation

STRUCTURE SUGGESTION:
1. Start simple - get basic attacks working
2. Add the battle system
3. Test with console.logs frequently
4. Add polish (better messages, formatting)
5. Add bonus features if time allows

DEBUGGING TIPS:
- console.log() is your friend!
- Test each method individually before combining
- Start with just 2 Pokemon, add more later
- Comment out parts that aren't working yet

MAKE IT FUN:
- Add emojis! ⚡🔥💧🌿
- Use dramatic language in console messages
- Add ASCII art if you're feeling creative
- Make the battle feel exciting!
*/

console.log("\n✨ Good luck, Pokemon Trainer! ✨");
