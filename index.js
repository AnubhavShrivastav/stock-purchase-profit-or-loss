// step 1 - Selecting all the elements 
const initialPrice = document.querySelector("#initial-price");
const noOfShares = document.querySelector("#noStocks");
const currentPrice = document.querySelector("#currentPrice");
const submit = document.querySelector("#submit").addEventListener('click',calculate)
const output = document.querySelector("#output");

function calculate(){
  
  let costPrice = Number(initialPrice.value);
  let noShares = Number(noOfShares.value);
  let sellingPrice = Number(currentPrice.value);
  

  if(costPrice && noShares && sellingPrice !== null){
    
    if(sellingPrice > costPrice ){
        let profit = sellingPrice - costPrice;
        let profitPercentage = ((profit / costPrice) * 100).toFixed(2);
        output.style.color = 'green';
        output.innerText = `Yay!! your profit is ${profit} and profit percentage is ${profitPercentage}%.`
    }else if(sellingPrice < costPrice){
        let loss = costPrice - sellingPrice;
        let lossPercentage = ((loss / costPrice) * 100).toFixed(2);
        output.style.color = 'red';
        output.innerText = `whoops!! your loss is ${loss} and loss percentage is ${lossPercentage}%.`
    }else if(sellingPrice === costPrice){
        output.style.color = 'blue';
        output.innerText = `No pain No gain, and no gain no pain`;
    }
    
    
  }else{
       output.style.color = 'red'
       output.innerText = "Please Fill Out All Field.";
  }  



}
















