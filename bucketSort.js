/*
 * @Descripttion: bucketSort----桶排序 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:30:36
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-01-09 00:17:58
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
  for (let j in bucket) {
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

/** 时间复杂度
 * 桶分配时间随array长度增加而增加，即O(n)
 * 将桶元素取出时间随最大值K和桶大小s决定，即O(K/s)
 * 最好的情况：桶数量等于array长度，每个桶的长度皆为1，无需进行插入排序，即O(n + k / s)，简化为(n + k)
 * 
 * 最坏的情况：桶的数量只有1个，桶处理变得无意义，并对所有数据进行一次最坏插入排序，即O(n + n ^ 2 + 1)，简化为O(n ^ 2)
 */

/** 空间复杂度
 * 新建bucket数组，长度由最大值K决定，每一个元素皆为数组
 * 所有子元素数组长度相加等于array长度，即O(n + k)
 */