// Función que ordena el array con el algoritmo de la burbuja
function bubble_sort(arr) {
    // Imprimir el array desordenado
    console.log(arr);
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
let arr = [1, 43, 9, 5];

// Llamamos a la función que ordena el array y le pasamos el array desordenado
bubble_sort(arr);