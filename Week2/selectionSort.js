function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;  // Assume current index is the minimum

        for (let j = i + 1; j < arr.length; j++) {  // Iterate over the unsorted part
            if (arr[j] < arr[min]) {
                min = j;  // Update min if a smaller value is found
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];  // Swap only once after finding the min
        }
    }
    return arr;
}

console.log(selectionSort([38, 85, 3, 5, 65, 63, 77]));
