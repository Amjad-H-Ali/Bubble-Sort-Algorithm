console.log("Bubble Sort");


const bubbleSort = (array) => {
	for (let i = 0, len = array.length; i < len; i ++) {
		for (let j = i+1, len = array.length; j < len; j ++) {
			if (array[i] > array[j]) {
				console.log(`${array[i]} is GREATER than ${array[j]}!`);
			}

			else if (array[i] === array[j]) {
				console.log(`${array[i]} is EQUAL to ${array[j]}!`);
			}

			else {
				console.log(`${array[i]} is LESS than ${array[j]}!`);
			};
		};
	};
};


const numbers = [9,5,3,6,5,7,9,0,1,2];
bubbleSort(numbers);