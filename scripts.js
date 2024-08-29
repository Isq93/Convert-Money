const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


    const dolarToday = 5.5
    const euroToday = 6.14
    const libratoday = 7.2
    const bitcointoday = 349.470


    // se tiver selecionado o valor de dólar, entre aqui.
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    //se tiver selecionado o valor de euro, entre aqui.
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelect.value == "libra") {
        // Verifica se os valores de entrada e a taxa de câmbio estão definidos
        if (inputCurrencyValue && libratoday) {
            // Realiza a conversão de moeda
            const currencyValueConverted2 = inputCurrencyValue / libratoday;
            
            // Formata o valor convertido para Libra Esterlina
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 2, // 2 casas decimais, como é comum em moedas fiduciárias
                maximumFractionDigits: 2
            }).format(currencyValueConverted2);
        
        }
    }
    

  /*   if (currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)
    } */


    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "decimal", // Usa 'decimal' já que 'currency' com 'BTC' pode não ser suportado
            minimumFractionDigits: 8, // Definindo 8 casas decimais para Bitcoin
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcointoday) + " ₿ " // Adicionando o símbolo BTC manualmente
    }
    
   /*  if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcointoday)
    } */



    // currencyValueToConvert.innerHTML = inputCurrencyValue
    // agora com o jeito formatado.

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)







    // currencyValueConverted.innerHTML = convertedValue
    //abaixo é o modo formatado para aparecer o valor aproximado.

    /*    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
       }).format(convertedValue) */
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }
    convertValue()
}



convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change", changeCurrency)
