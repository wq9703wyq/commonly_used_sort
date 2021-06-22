/*
 * @Descripttion: selectionSort----选择排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 17:09:30
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 20:31:57
 */

// 在序列中寻找最小的元素，并放在序列的初始位置作为已排序序列
// 继续从剩余未排序元素中寻找最小的元素，放到已排序序列的末尾
// 直到排序完毕
function selectionSort(array) {
  const len = array.length;
  for (let i = 0; i < len - 1 ; i++) {
    let temp = array[i];
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < temp) {
        temp = array[j];
        maxIndex = j;
      }
    }
    array[maxIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectionSort([2, 3, 1, 5, 11, 23, 9, 8]));

/** 时间复杂度 O(n ^ 2)
 * 在O(n)次的循环里进行O(n-i-1)次循环，简化为O(n ^ 2)
 */

/** 空间复杂度 O(1)
 * 算法进行原地排序，所以为O(1)
 */