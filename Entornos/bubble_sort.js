// Función que ordena el array con el algoritmo de la burbuja
function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                // Si la condición se cumple, intercambiamos los valores
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Imprimir el array ordenado
    console.log(arr);
}

// Creamos un array desordenado
let arr = [1, 43, 9, 63, 5, 6, 235, 547];

// Now pass this array to the bblSort() function
bubble_sort(arr);