const input = document.querySelector(".numbers")
const form = document.querySelector(".container form")
const clear = document.querySelector(".clear")

let numbersArray = []
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let numbers = input.value
    numbers = numbers.replace(/\s/g, '')
    // console.log(numbers)
    
    let num = ""
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] != ','){ 
            num += numbers[i]
        }
        else if (numbers[i] == ',' || i-1 == numbers.length) {
            const numI = parseInt(num)
            numbersArray.push(numI)
            num = ""
        }
    }
    num = parseInt(num)
    numbersArray.push(num)

    const ordenado = mergeSort(numbersArray)
    show(ordenado)
})



const merge = (leftArr, rightArr) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]

        if (leftEl < rightEl) {
            output.push(leftEl)
            leftIndex++;
        }
        else {
            output.push(rightEl)
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

const mergeSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

function show(array) {
    const result = document.querySelector(".result")
    let element = document.createElement('p')
    element.textContent = `Elementos ordenados: ${array}`
    element.classList.add('orderedArray')
    result.appendChild(element)
    input.value = ''
    
    if(isNaN(array[0])){
        input.value = ''
        numbersArray = []
        array = [] 
        // limpar elementos antigos
        const oldElements = document.querySelectorAll(".orderedArray")
        oldElements.forEach(element => {
            element.remove()
        }
        )
    }
}


clear.addEventListener('click', () => {//limpar o array
    input.value = ''
    /* const orderedArray = document.querySelector(".orderedArray")
    const result = document.querySelector(".result")
    result.removeChild(orderedArray)*/
    numbersArray = []
    array = [] 
    // limpar elementos antigos
    const oldElements = document.querySelectorAll(".orderedArray")
    oldElements.forEach(element => {
        element.remove()
    }
    )
} )

/* 
clear.addEventListener('click', () => {
    input.value = ''
    const orderedArray = document.querySelector('.orderedArray')
    orderedArray.parentNode.removeChild(orderedArray)
})
 */

