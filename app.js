//valueInEuro to dollars
   const fromEuroToDollar = (euro) => {
     return euro * 1.07;
 
};
    
 
const fromDollarToYen = (dollar) => {
   return dollar / 1.07*156.5
};


const fromYenToPound = (yen) => {
    return yen/ 156.5 * .87 
};


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};