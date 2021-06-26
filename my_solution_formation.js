function tns(input) {
    // sort the array in place
  input.sort()
  input = input.filter((v, i, a) => a.indexOf(v) === i)
  
  let triplets = []
  for(let i = 0; i < input.length - 1; i++){
    // left is directly next to current val
    let left = i + 1
    // right is last val
    let right = input.length - 1
    // keep looping until they pass each other
    while(left < right){
      const currSum = input[i] + input[left] + input[right]
      if(currSum === 0){
        triplets.push([input[i], input[left], input[right]])
        left++
        right--
      } else if(currSum < 0){ // if its not high enough, then move the left higher
        left++
      } else if(currSum > 0){ // if its too high, move the right down
        right--
      }
    }
  }
  
  return triplets
}
