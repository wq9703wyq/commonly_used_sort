/*
 * @Descripttion: bucketSort----桶排序 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:30:36
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 17:53:20
 */

function bucketSort(arr, size = 4) {
  const len = arr.length;
  size = len >= size * 2 ? size : len;
  let bucket = [];
  let result = [];
  for (let i = 0; i < len; i++) {
    const value = arr[i];
    const index = parseInt(value / size); // 按元素大小区间分配对应桶下标
    if (bucket[index]) {
      bucket[index].push(value);
    } else {
      bucket[index] = [value];
    }
  }
  console.log(bucket);
  for (let k = 0; k < bucket.length; k++) {
    bucket[k] && insertionSort(bucket[k]); // 对各桶进行桶排序
  }

  // 取出各个桶的元素
  for (let j = 0; j < bucket.length; j++) {
    const array = bucket[j] || [];
    result.push(...array);
  }
  return result;
}

function insertionSort(array) {
  console.log(array)
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let j = i - 1;
    for (j; j >= 0 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}

console.log(bucketSort([2, 1, 11, 55, 44, 22]));