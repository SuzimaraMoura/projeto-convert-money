const convertButton=document.querySelector(".convert-button");
const currencySelect=document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyvalue=document.querySelector(".input-currency").value
   
    const currencyToConvert=document.querySelector(".currency-value-to-convert")
    const currencyConverted=document.querySelector(".currency-value")

    

    const dolarToday=5.2
    const euroToday=6.2
    const libraToday=8.2
    const bitcoinToday=216000
    

    if(currencySelect.value=="dolar"){
        currencyConverted.innerHTML= new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyvalue/dolarToday)
    }
    if(currencySelect.value=="euro"){
        currencyConverted.innerHTML= new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyvalue/euroToday)
    }
    if(currencySelect.value=="libra"){
        currencyConverted.innerHTML= new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyvalue/libraToday)
    }
    if(currencySelect.value=="bitcoin"){
        currencyConverted.innerHTML= new Intl.NumberFormat("en-IN",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyvalue/bitcoinToday)
    }


    currencyToConvert.innerHTML= new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyvalue)     
}

function currencyChange(){
    const currencyName=document.getElementById("currency-name")
    const currencyImage=document.querySelector(".currency-img")

    if(currencySelect.value=="dolar"){
        currencyName.innerHTML="Dolar Americano"
        currencyImage.src = "assets/dolar.png"
       
    }
    if(currencySelect.value=="euro"){
        currencyName.innerHTML="Euro"
        currencyImage.src = "assets/euro.png" 
        
    }
    if(currencySelect.value=="libra"){
        currencyName.innerHTML="Libra"
        currencyImage.src = "assets/libra.png"
       
    }
    if(currencySelect.value=="bitcoin"){
        currencyName.innerHTML="Bitcoin"
        currencyImage.src = "assets/bitcoin.png"
       
    }

    convertValues()
    
}


currencySelect.addEventListener("change",currencyChange)

convertButton.addEventListener("click", convertValues)
 

