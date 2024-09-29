console.log("skynet initiated")
/*.*/


let grades = [85,92,78,68,99,73,88,91];
console.log(grades);

grades.forEach(grade => {
    if (grade >=90){
        console.log(`${grade} = A`);
    } else if (grade >=80 && grade >=89){
        console.log(`${grade} = B`);
    }else if (grade >=70 && grade >=79){
        console.log(`${grade} = C`);
    }else if (grade >=60 && grade >=69){
        console.log(`${grade} = D`);
    }else {
        console.log(`${grade} = F`);
    }
});



/*class performance*/

let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;

let performance;
if (average >= 90) {
    performance = "Excellent";
} else if (average >= 80 && average <= 89) {
    performance = "Good";
} else if (average >= 70 && average <= 79) {
    performance = "Satisfactory";
} else {
    performance = "Needs Improvement";
}

console.log(`Average Grade: ${average.toFixed(2)}`);
console.log(`Class Performance: ${performance}`);


/*Treasure hunt*/

function treasureHunt(island) {
    console.log(`There are ${island.length} moves in the island`);

    let treasureCount = 0;

    island.forEach((spot, index) => {
        if (spot === 'T') {
            console.log(`Treasure found at move ${index + 1} :)`);
        } else {
            console.log(`No treasure found :(`);
        }
    });

    console.log(`There were ${treasureCount} treasures in the island`);
}

/* Example 1 */
let island1 = ['-', '-', 'T', '-', '-'];
treasureHunt(island1);

/* Example 2 */
let island2 = ['T', 'T', 'T', '-'];
treasureHunt(island2);


/* Startup name generator*/

function getStartupName() {
    /*First half of the startup name*/
    const words1 = ['Tech', 'Innovate', 'Smart', 'Next', 'Alpha', 'Quick', 'Hyper', 'Bright'];

    /*Second half of the startup name*/
    const words2 = ['Solutions', 'Labs', 'Systems', 'Stream', 'Wave', 'Works', 'Hub', 'Force'];

    /*Random index generator for each array*/
    const randomIndex1 = Math.floor(Math.random() * words1.length);
    const randomIndex2 = Math.floor(Math.random() * words2.length);

    /* Combine*/
    const startupName = `${words1[randomIndex1]} ${words2[randomIndex2]}`;
    return startupName;
}

// Example usage
console.log(getStartupName());
console.log(getStartupName());
console.log(getStartupName());
