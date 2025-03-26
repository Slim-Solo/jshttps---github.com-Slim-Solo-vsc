function intervalSum(start, end)
{
    let sum = 0

for (let i=start; i<=end; i++)
    {
        sum += i;
    }
    return sum;
}

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));


function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
}
console.log();
