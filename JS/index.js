console.log("Bubble Sort");


const bubbleSort = (array) => {
	array.forEach((num, i) => console.log(num > array[i + 1])); 
}


const numbers = [9,5,3,6,5,7,9,0,1,2];
bubbleSort(numbers);