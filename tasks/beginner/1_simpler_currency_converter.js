const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertCurrency(amount, fromCurrency, toCurrency, rate) {
    if (rate[fromCurrency] && rate[fromCurrency][toCurrency]) {
        const conversionRate = rate[fromCurrency][toCurrency];
        const convertedAmount = amount * conversionRate;
        console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
        console.error('Что-то пошло не так, попробуй снова! ): ');
    }
}

const exchangeRates = {
    AMD: {
        RUB: 0.23,
        USD: 0.0025
    },
    USD: {
        AMD: 412.12,
        RUB: 89.76
    },
    RUB: {
        AMD: 4.38,
        USD: 0.011
    }
};

readline.question('Введите сумму: ', amount => {
    readline.question('Введите исходную валюту: ', fromCurrency => {
        readline.question('Введите целевую валюту: ', toCurrency => {
            const numericAmount = parseFloat(amount);

            if (!isNaN(numericAmount)) {
                convertCurrency(numericAmount, fromCurrency, toCurrency, exchangeRates);
            } else {
                console.error('Введите корректное числовое значение для суммы.');
            }

            readline.close();
        });
    });
});
