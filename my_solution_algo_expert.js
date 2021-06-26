function threeNumberSum(array, targetSum) {
	// sort the array in place
	array.sort((a, b) => a - b)
	console.log(array)
	let triplets = []
	for(let i = 0; i < array.length - 1; i++){
		// left is directly next to current val
		let left = i + 1
		// right is last val
		let right = array.length - 1
		// keep looping until they pass each other
		while(left < right){
			const currSum = array[i] + array[left] + array[right]
			if(currSum === targetSum){
				triplets.push([array[i], array[left], array[right]])
				left++
				right--
			} else if(currSum < targetSum){ // if its not high enough, then move the left higher
				left++
			} else if(currSum > targetSum){ // if its too high, move the right down
				right--
			}
		}
	}
	
	return triplets
}
