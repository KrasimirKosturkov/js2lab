function fruitVegetable(fruit){
    if (fruit === 'banana' || fruit === 'apple' || fruit === 'kiwi'|| fruit === 'lemon'
        || fruit === 'cherry' || fruit === 'grapes'|| fruit === 'peach')
        console.log('fruit')
    else if (fruit === 'tomato' || fruit === 'cucumber' || fruit === 'pepper'
        || fruit === 'onion' || fruit === 'garlic' || fruit === 'parsley')
        console.log('vegetable')
    else
        console.log('unknown')
}

fruitVegetable('banana')
fruitVegetable('cucumber')
fruitVegetable('pizza')