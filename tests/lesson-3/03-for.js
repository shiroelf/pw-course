for(let i = 0 ; i < 100 ; i++){
    let sum = 0;
    sum += i;
    console.log(sum);
}

for(let i = 1 ; i < 9 ; i ++){
    for(let j = 1 ; j < 9 ; j ++){
        console.log(i + " x " + j + " = " + i*j);
    }
}

const oddNumber = [];
for(let i = 1 ; i < 99 ; i++){
    if(i % 2 !== 0){
        oddNumber.push(i);
    }
}

const emails = [];

for (let i = 1; i <= 10; i++) {
    emails.push(`user-${i}@example.com`);
}


const revenue = [
    { month: 1, total: 120 },
    { month: 2, total: 100 },
    { month: 3, total: 150 },
    { month: 4, total: 130 },
    { month: 5, total: 110 },
    { month: 6, total: 140 },
    { month: 7, total: 170 },
    { month: 8, total: 180 },
    { month: 9, total: 160 },
    { month: 10, total: 200 },
    { month: 11, total: 190 },
    { month: 12, total: 210 }
];
let totalSum = 0
for(i in revenue){
    totalSum += revenue[i].total;
}
console.log(totalSum);


