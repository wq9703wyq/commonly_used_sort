/*
 * @Descripttion: mergeSort----归并排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 19:02:07
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-02 19:45:45
 */

// 通过递归将数组分为若各个长度为2的小数组，并将同级数组进行排序合并成一个有序数组
// 继续将排序后的合并数组两两排序合并成新的合并数组，直到只剩一个合并数组

function merge(left = [], right = []) {
  let i = j = 0;
  const mergeArr = [];
  while (i !== left.length && j !== right.length) {
    // 将两者中较小的值放入合并数组，直到两者中有一方将所有数据都放入合并数组
    mergeSort.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  // 将剩下的值放入合并数组
  return [...mergeArr, ...left.slice(i, left.length), ...right.slice(j, right.length)];
}

function mergeSort(array = []) {
  if (array.length <= 1) {
    return array;
  }
  const center = array.length >> 1;
  const right = array.slice(0, center);
  const left = array.slice(center, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([2, 3, 4, 11, 22, 7, 33, 9, 1]);