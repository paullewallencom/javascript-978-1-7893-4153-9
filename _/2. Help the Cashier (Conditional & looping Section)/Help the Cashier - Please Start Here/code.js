//help the cashier return the right of change


//Programme input: 
    
//Amount due
var total = prompt('Total due:');
    
//Amount paid by the customer
var moneyPaid = prompt('Amount paid:');

//convert collected values to float numbers. Make sure the decimal part has two digits only.
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:
    
//calculate the change amount.Make sure the decimal part has two digits only.
var change = (moneyPaid - total).toFixed(2);

//Print the amount due/ amount paid/ change
console.log('Due: £' + total + '/ Paid: £' + moneyPaid + '/ Change: £' + change);
    
//Print change breakdown: notes and coins

var note_coin;

//£50 note
note_coin = {
    value: 50,
    name: '£50 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£20 note
note_coin = {
    value: 20,
    name: '£20 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£10 note
note_coin = {
    value: 10,
    name: '£10 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£5 note
note_coin = {
    value: 5,
    name: '£5 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£2 coin
note_coin = {
    value: 2,
    name: '£2 coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£1 coin
note_coin = {
    value: 1,
    name: '£1 coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//50p coin
note_coin = {
    value: 0.50,
    name: '50p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//20p coin
note_coin = {
    value: 0.20,
    name: '20p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//10p coin
note_coin = {
    value: 0.10,
    name: '10p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//5p coin
note_coin = {
    value: 0.05,
    name: '5p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//2p coin
note_coin = {
    value: 0.02,
    name: '2p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//1p coin
note_coin = {
    value: 0.01,
    name: '1p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;






