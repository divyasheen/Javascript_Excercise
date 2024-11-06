// The Cat Object
// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.
// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties (there's an example in the slides). Call them something that 
//     actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area.
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.

const cat = {
    tiredness: 0,
    hunger: 0,
    loneliness: 0,
    happiness: 0,
    feed: function(amount) {
        this.hunger -= amount;
        this.happiness += amount;
    },
    sleep: function(amount) {
        this.tiredness -= amount;
        this.happiness += amount;
    },
    pet: function(amount) {
        this.loneliness -= amount;
        this.happiness += amount;
    },
    status: function() {
        console.log(`Tiredness: ${this.tiredness}`);
        console.log(`Hunger: ${this.hunger}`);
        console.log(`Loneliness: ${this.loneliness}`);
        console.log(`Happiness: ${this.happiness}`);
    }
};

cat.feed(10);
cat.sleep(5);
cat.pet(3);
cat.status();



