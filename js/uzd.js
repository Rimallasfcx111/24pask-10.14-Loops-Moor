'use strict';
console.log('uzd.js');

// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3

// 1. sukam cikla nuo 12 iki 24
// 2. kiekvieno ciklo metu mes einamaja reiksme (index) padauginam is 3 ir atspausdinam
// for (let i = 12; i <= 24; i++) {
//   let padaugintas = i * 3;
//   console.log(`reiksme ${i} padauginta gaunasi ${padaugintas}`);
// }

// 20. sudauginti skaiciu nuo kintamojo total iki kintamojo max
// total 5. max 10
// sudauginti ir aspausdinti skaiciu daugybos rezultata
let min = 5;
let max = 10;
// let total = 0; kai +
let total = 1; //kai * 

for (let i = total; i <= max; i++){
    console.log(i);
    // total = total + i;
    total = total * i;
    console.log('total ===', total);
    
}
console.log('total ===', total); //Baigta