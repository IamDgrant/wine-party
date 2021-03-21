// const merge = (arr1, arr2) => {
//     let merged = [];
    
//     while (arr1.length && arr2.length) {
//         if (arr1[0] > arr2[0]) {
//         let ele = arr2.shift();
//         merged.push(ele)
//     } else {
//     let ele = arr1.shift()
//     merged.push(ele)
//     }
//     while (arr1.length) {
//     let ele = arr1.shift();
//     merged.push(ele)
//     }
//     while (arr2.length) {
//     let ele = arr2.shift()
//     merged.push(ele)
//     }
//     }
//     return merged;
//     }
//     ``
//     const mergeSort = (arr) => {
//     if (arr.length <= 1) {
//     return arr
//     }
    
//     let half = Math.floor(arr.length / 2)
    
//     let left = arr.slice(0, half)
//     let right = arr.slice(half)
    
//     let sortedLeft = mergeSort(left);
//     let sortedRight = mergeSort(right)
    
//     return merge(sortedLeft, sortedRight)
//     }

function merge(array1, array2) {

    let result = [];
  
    while (array1.length !== 0 && array2.length !== 0) {
      if (array1[0] > array2[0]) {
        let el = array2.shift();
        result.push(el);
      } else {
        let el = array1.shift();
        result.push(el);
      }
    }
  
    while (array1.length !== 0) {
      let el = array1.shift();
      result.push(el);
    }
  
    while (array2.length !== 0) {
      let el = array2.shift();
      result.push(el);
    }
    return result;
  }
  
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let half = Math.floor((array.length / 2));
  
    let left = array.slice(0, half);
    let right = array.slice(half)
  
    left = mergeSort(left);
    right = mergeSort(right);
  
    return merge(left, right);
  }
    

    console.log(mergeSort([2, -1, 4, 3, 7, 3]))