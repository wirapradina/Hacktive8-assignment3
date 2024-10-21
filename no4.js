function arrSum(arr) {
    let max_current = arr[0];
    let max_global = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_current + arr[i]) {
            max_current = arr[i];
            tempStart = i;
        } else {
            max_current += arr[i];
        }
        if (max_current > max_global) {
            max_global = max_current;
            start = tempStart;
            end = i;
        }
    }

    let subarray = arr.slice(start, end + 1);
    return [subarray, max_global];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: [[4, -1, -2, 1, 5], 7]

// WIRA PRADINA RESTI