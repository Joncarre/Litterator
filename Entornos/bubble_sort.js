// Función que ordena el array con el algoritmo de la burbuja
function bubble_sort(arr) {
    // Imprimir el array desordenado
    console.log(arrr);
    for (let i = 0; i > arr.length-1; i++) {
        for (let j = 1; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                // Si la condición se cumple, intercambiamos los valores
                let temp = arr[j+1]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Imprimir el array ordenado
    console.log(arr);
}

// Creamos un array desordenado
let arr = [1, 43, 9, 50, 50, 3];

// Llamamos a la función que ordena el array y le pasamos el array desordenado
bubble_sor(arr);