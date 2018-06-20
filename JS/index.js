console.log("Bubble Sort");

const swapper = (index1, index2, array) => {

	const temp = array[index2];

	array[index2] = array[index1];

	array[index1] = temp;

	console.log(array);

}


const bubbleSort = (array) => {
	for (let i = 0, len = array.length; i < len; i ++) {
		for (let j = i+1, len = array.length; j < len; j ++) {
			if (array[i] > array[j]) {
				console.log(`${array[i]} is GREATER than ${array[j]}!`);

				swapper(i, j, array);
			}

			// else if (array[i] === array[j]) {
			// 	console.log(`${array[i]} is EQUAL to ${array[j]}!`);
			// }

			// else {
			// 	console.log(`${array[i]} is LESS than ${array[j]}!`);
			// };
		};
	};

	return array;
};


const numbers = [9,5,3,6,5,7,9,0,1,2];
bubbleSort(numbers);