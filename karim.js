const JONNY = {
   fullName: "Jonny Opera",
   bill: [102, 53, 24, 976, 20],
   tipCalc: function(amount){
      if(amount < 50){
         return 0.2;
      } else if (amount < 200){
         return 0.15;
      } else {
         return 0.1;
      }
   }
}

function tip(){
   const myTip = JONNY.bill.map(x => (x * JONNY.tipCalc(x)).toFixed(2));
   return myTip;
}

console.log(tip());