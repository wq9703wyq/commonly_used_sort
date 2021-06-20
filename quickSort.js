/*
 * @Descripttion: quickSort----快速排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 16:24:52
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 16:40:14
 */

/**
 * @description: 原地排序不产生额外空间
 * @param {*} array
 * @param {*} start
 * @param {*} end
 * @return {*}
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