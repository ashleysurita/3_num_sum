# 3_num_sum

### Algo-expert problem
https://www.algoexpert.io/questions/Three%20Number%20Sum

### Formation Problem
```
/*
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals zero (a + b + c = 0).

Examples:
- Given an array: [1, 2, 0] returns: []
- Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
- Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]
*/

function tns(input) {
    // Write your code here.
    return []
}

// Test Cases
test.startProblem("Three Number Sum")
test.testForArrays([], tns([]), 1)
test.testForArrays([[-1, 0, 1]], tns([-1, 0, 1]), 2)
test.testForArrays([[-1, 0, 1]], tns([-1, -1, 1, 1, 0, 0]), 3)
test.testMatchAny([[-1, 0, 1], [-5, 1, 4]], tns([-5, -1, 0, 1, 4, -1]), 4)
test.endProblem()
```
