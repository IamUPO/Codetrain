function person( name, age ) {
    console.log('My name is' + " " + name + '.' + " " + 'I am ' + age + " " + "years")
}

person('Abu', 15)

function tax(cost) {
    let taxAmt = cost * 0.25
    return taxAmt
}

console.log(tax(7000));

function tip(cost) {
    let tipAmt = cost * 0.2
    return tipAmt
};

let finalPrice = tax(7000) + tip(7000) + 7000

console.log(finalPrice);

const people = (market, characteristics ) => {
    console.log( "The" + " " + "people" + " " + "at" + " "  + market + " " + "are" + " " + characteristics)
}

people("Dodowa", "Excellent")