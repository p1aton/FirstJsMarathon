

//Мое решение 

//Задание 1

let letter = prompt("Введите букву")
const firstRow = prompt('Введите первое предложение');
const secondRow = prompt('Введите второе предложение');

function getRow(firstRow, secondRow) {

const countFirst = [...firstRow].filter(l => l === letter).length;
const countSecond = [...secondRow].filter(l => l === letter).length;

if (countFirst > countSecond) {
	return firstRow
} else {
	return secondRow
}
}

console.log(getRow(firstRow, secondRow))

//Задание 2


var formatPhoneNumber = function(str) {
    var res = '';
    str += '';
    for (var i=0;i<str.length;i++) {
    	if (0 === i) {
        	res += str.charAt(i).replace(/7|8/gi, '+7 (');
        } 
        else if (3 === i ) {
            res += str.charAt(i) + ') ';
        } 
        else if (6 === i || 8 === i) {
            res += str.charAt(i) + '-';
        } 
        else { 
            res += str[i];
        }
    }
    return res;
}

t=prompt()
p=formatPhoneNumber(t)
console.log(p)


var formatPhoneNumber = function(str) {
    var res = '';
    str += '';
    for (var i=0;i<str.length;i++) {
    	if (0 === i) {
        	res += str.charAt(i).replace(/^9/gi, '+7 (9');
        } 
        else if (2 === i ) {
            res += str.charAt(i) + ') ';
        } 
        else if (5 === i || 7 === i) {
            res += str.charAt(i) + '-';
        } 
        else { 
            res += str[i];
        }
    }
    return res;
}

t=prompt()
p=formatPhoneNumber(t)
console.log(p)

//Решение 

// Вариант 1

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
	let firstResult = 0;
    let secondResult =0;
    
    for (let i = 0; i < firstRow.length; i++) {
    	if (firstRow.charAt(i) === 'а') {
        	firstResult++;
        } 
}
console.log(firstResult)

	for (let i = 0; i < secondRow.length; i++) {
    	if (secondRow.charAt(i) === 'а') {
        	secondResult++;
        } 
}
console.log(secondResult)
return firstResult > secondResult ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow));

// Вариант 2

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const CHAR = 'а'

function getRow(firstRow, secondRow) {
	let firstResult = countedChar(firstRow, CHAR);
    let secondResult =countedChar(secondRow, CHAR);
    
    if (firstResult === secondResult) {
    	return 'Здесь одинаковое кол-во букв ' +CHAR;
    }
    
return firstResult > secondResult ? firstRow : secondRow;
}

function countedChar(row, char) {
	let result = 0;
    for (let i = 0; i < row.length; i++) {
    	if (row.charAt(i) === char) {
        	result++;
        } 
}
	return result;
}

console.log(getRow(firstRow, secondRow));



