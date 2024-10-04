const [
    bigMacHistory,
    bigMacNutrition,
    bigMacFacts,
    oldSlideButton,
    // newSlideButton,
] = [
    document.getElementById('BigMacHistory'),
    document.getElementById('BigMacNutrition'),
    document.getElementById('BigMacFacts'),
    document.getElementById('oldSlideButton'),
    // document.getElementById('newSlideButton'),
]

let newSlideButton = document.getElementById('newSlideButton')

let currentSlide = 'bigMacHistory'

oldSlideButton.addEventListener('click', () => {oldSlide()})
newSlideButton.addEventListener('click', () => {newSlide()})

let counter = 1

function oldSlide(currentSlide) {
    if (counter == 0) {
        console.log(counter)
        counter = 2;
        bigMacFacts.style.display = 'none';
        bigMacNutrition.style.display = 'grid';
    } else if (counter == 2) {
        console.log(counter)
        counter = 1;
        bigMacNutrition.style.display = 'none';
        bigMacHistory.style.display = 'grid';
    } else {
        console.log(counter)
        counter = 0;
        bigMacHistory.style.display = 'none';
        bigMacFacts.style.display = 'grid'
    }
}

function newSlide() {
    if (counter == 0) {
        console.log(counter)
        ++counter;
        bigMacFacts.style.display = 'none';
        bigMacHistory.style.display = 'grid'
    } else if (counter == 1) {
        console.log(counter)
        ++counter;
        bigMacHistory.style.display = 'none';
        bigMacNutrition.style.display = 'grid'
    } else {
        console.log(counter)
        counter = 0
        bigMacNutrition.style.display = 'none';
        bigMacFacts.style.display = 'grid'
    }
}

let bigMacIngredientsList = [
    'Big Mac Bun',
    '100% Beef Patty',
    'Shredded Lettuce',
    'Big Mac Sauce',
    'Pasteurized Processed American Cheese',
    'Pickle Slices',
    'Onions'
]

const bigMacIngredientsListElement = document.getElementById('BigMacIngredientsList')

for (let ingredient of bigMacIngredientsList) {
    let ingredientLi = document.createElement('li')
    ingredientLi.innerHTML = ingredient
    bigMacIngredientsListElement.appendChild(ingredientLi)
}

let bigMacNutritionList = [
    '590 Calories',
    '25g of Protein',
    '46g of Carbs',
    '34g of Fat',
    '11g of Saturated Fat',
    '1g of Trans Fat',
    '85mg of Cholesterol',
    '3g of Fibre',
    '9g of Sugar (7g Added)',
    '120mg of Calcium',
    '4.5mg of Iron',
    '390mg of Potassium',
    '1050mg of Sodium'
]

const bigMacNutritionListElement = document.getElementById('BigMacNutritionList')

for (let info of bigMacNutritionList) {
    let infoLi = document.createElement('li')
    infoLi.innerHTML = info
    bigMacNutritionListElement.appendChild(infoLi)
}

let bigMacFactList = [
    'The Big Mac had a few names before the company finally settled, including "The Aristocrat". McDonalds opted for "Big Mc" before a secretary in their advertising department called it the Big Mac and execs changed it later on.',
    'The buns have anywhere from 385-400 sesame seeds on them.',
    'Someone from Wisconsin had eaten over 30,000 Big Macs and has had one nearly every day since 1972.',
    'The Big Mac is McDonalds second best selling item, only behind the fries.',
    'The city of Pittsburgh actually renamed itself to "Big Mac" for a single day in 1992.',
    'The Economist created a "Big Mac Index" to measure currency exchange rates because so many countries sell the burger.',
    'Americans eat roughly 550 million Big Macs each year, which is about 17 burgers each second.'
]

const bigMacFactListElement = document.getElementById('BigMacFactList')

for (let fact of bigMacFactList) {
    let factLi = document.createElement('li')
    factLi.innerHTML = fact
    bigMacFactListElement.appendChild(factLi)
}