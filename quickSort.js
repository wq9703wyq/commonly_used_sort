/*
 * @Descripttion: quickSort----快速排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 16:24:52
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 23:05:58
 */

/**
 * @description: 原地排序不产生额外空间
 * @param {*} array
 * @param {*} start
 * @param {*} end
 * @return {*}
 */

/** 时间复杂度 
 * 最好时间复杂度：每次分区长度均匀，即递归深度为(log2 n) + 1，并且各自需要执行while循环n/2次，即O(n * log n)
 * 最坏时间复杂度：序列为有序序列，每次分区长度极不均匀，每次短区间长度仅为1，因此长区间需要递归n - 1次，即递归深度为O(n - 1) + O(n),
 * 各自需要执行while循环n/2次，即O((2n - 1)*n)，简化为O(n ^ 2)
*/
function quickSort(array) {
  return innerQuickSort(array, 0, array.length - 1);
  function innerQuickSort(array, start, end) {
    if (start < end) {
      let i = start;
      let j = end;
      while (i < j) {
        while (i < j && array[i] < array[j]) {
          j--;
        }
        if (i < j) {
          swap(array, i, j);
          i++;
        }
        while (i < j && array[j] > array[i]) {
          i++;
        }
        if (i < j) {
          swap(array, i, j);
          j--;
        }
      }
      innerQuickSort(array, start, i - 1);
      innerQuickSort(array, i + 1, end)
    }
    return array;
  }

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


/**
 * @description: 额外空间排序 
 * @param {*} array
 * @return {*}
 */

/** 空间复杂度 
 * 空间复杂度随时间复杂度变化，在两种时间复杂度的基础上*2，即O(2n * logn) 和O(2*n^2)简化为O(n * log n)和O(n ^ 2)
*/
function quickSortExart(array) {
  const len = array.length;
  if (len <= 1) {
    return array;
  }
  const center = array[len >> 1];
  const left = [];
  const right = [];
  for(let i = 0; i < len ; i++) {
    const value = array[i];
    if (value < center) {
      left.push(value);
    } else if (value > center) {
      right.push(value);
    }
  }
  return [...quickSort(left), center, ...quickSort(right)];
}