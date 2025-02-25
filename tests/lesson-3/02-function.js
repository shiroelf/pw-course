function calculateBMI(height, weight){
    const bmi = weight / (height * height);
    if(bmi < 18.5){
        return "Thieu can";
    }else if (bmi < 25){
        return "Binh thuong";
    }else if(bmi < 30){
        return "Thua can";
    }else if(bmi >= 30){
        return "Beo phi";
    }
}


function convertTemperature(type, value){
    if(type === "C"){
        return value * 9/5 + 32;
    }else{
        return value - 32 * 5/9;
    }
}

const arrayNumbers = [1, 2, 3, 4, 5];
function calculateSum(arrayNumbers){
    let sum = 0;
    for(let i = 0; i < arrayNumbers.length; i++){
        sum += arrayNumbers[i];
    }
    return sum;
}

function findPrimeNumber(arrayNumbers){
    let primeNumbers = [];
    for(let i = 0; i < arrayNumbers.length; i++){
        if(arrayNumbers[i] === 1){
            continue;
        }
        if(arrayNumbers[i] === 0){
            continue;
        }
        if(arrayNumbers[i] === 2){
            primeNumbers.push(arrayNumbers[i]);
        }
        for(let j = 2; j < arrayNumbers[i]; j++){
            if(arrayNumbers[i] % j === 0){
                break;
            }
            primeNumbers.push(arrayNumbers[i]);
        }
    }
    return primeNumbers;
}


const users = [
    { name: "Van", email: "van@example.com" },
    { name: "Duc", email: "duc@example.com" },
    { name: "Hai", email: "hai@example.com" }
]

function findUserByEmail(users, newEmail){
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            return users[i].email = newEmail;
        }
    }
}

const grades = [
    { name: "Van", grade: 10 },
    { name: "Duc", grade: 9 },
    { name: "Hai", grade: 8 }
]

function calculateAverageGrade(grades){
    let sum = 0;
    for(let i = 0; i < grades.length; i++){
        sum += grades[i].grade;
    }
    return sum / grades.length;
}   


const products = [
    { name: "Iphone", price: 1000 },
    { name: "Samsung", price: 2000 }
];

function checkGreaterThan0(products){
    for(let i = 0; i < products.length; i++){
        if(products[i].price > 0){
            return true;
        }
    }
    return false;
}

function openOrCloseDoor(hour){
    if(hour>= 9 && hour <= 21){
        return "open";
    }else{
        return "closed";
    }
}

function checkAgeTicket(age, price){
    if(age < 5){
        price = 0;
    }else if(age > 18){
        price = 100;
    }else if(age >= 6 && age <= 17){
        price = 50;
    }
    return price;
}

function monthName(month){
    switch(month){
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
}

function classifyGrade(grade){
    if(grade >= 8){
        console.log("Execllent");
    }else if (grade >= 6.5 && grade < 8){
        console.log("Good");
    }else if (grade >= 5 && grade < 6.5){
        console.log("Average"); 
    }else{
        console.log("Poor");
    }

}

function checkWeather(degree){
    if(degree >= 30){
        console.log("Hot");
    }else if(degree >= 20 && degree < 30){
        console.log("Warm");
    }else if (degree < 20){
        console.log("Cold");
    }
}


