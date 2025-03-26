/*
FOR (loop) - ciklas
*/

for (let i =0; i < 5; i++)
{
    console.log('a) number:', i);    
}
console.log('-----------');

console.log('number:', 1);
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);
console.log('number:', 5);
console.log('number:', 6);
console.log('number:', 7);

console.log('--------------');

for (let i = 0; i < 5; i++)
{
    console.log('number:', i);
}


for (let i = 1; i<5; i++)
    {
        console.log('Labas');
        
    } 

const n = 5

    for (let i = 1; i<10; i++)
    {
        console.log(`${n} * ${i} = ${n*1}`);   
    }

    console.clear();

    const marks = [10, 2, 8, 4, 6];

    let sum = 0
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];
    sum += marks[3];
    sum += marks[4];
    console.log(sum);

    let sum2 = 0

    for (let i=0; i <5; i++)
    {
        console.log('index', i, '-->', marks[i]);
        sum2 += marks[i];        
    }
    
    console.log(sum2);
    

    const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

    for (let i=0; i<names.length; i++)
    {
        const s = `Studento vardas yra ${names[i]}.`;
        console.log(s);        
    }


