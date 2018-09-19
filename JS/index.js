console.log("Bubble Sort");



const bubbleSort = (array) => {
	// Compare each number with all numbers in array
	for (let i = 0, len = array.length; i < len; i ++) 
		for (let j = 1; j < len; j ++) 
			// If number is greater than proceeding number, swap.
			if (array[j-1] > array[j]) {

				let temp = array[j-1]

				array[j-1] = array[j]

				array[j] = temp
			}
	// Return sorted array.
	return array;
}


const numbers = [6,3,9,0,6,1,15,32,0,0,14,7,5,8];
console.log(bubbleSort(numbers));
