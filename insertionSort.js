/*
 * @Descripttion: insertionSort----直接插入排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 18:17:43
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 20:40:47
 */
// 从第二个元素开始，从左往右扫描已排序序列
// 若发现扫描当前元素大于新元素，则将当前元素后移一位，直到当前元素小于新元素
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;
    for (j; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

/** 时间复杂度 O(n ^ 2)
 * 最优时间复杂度：最好的情况是在进行内部插入循环时，temp的数值为最大，不需要扫描有序序列，即O(n)
 * 最坏时间复杂度：进行有序序列扫描时，temp的数值为序列内最小，进行了O(1)+O(2)+O(3)+...+O(n)，即O(n(1 + n)/2)，简化为O(n ^ 2)
 */

/** 空间复杂度 O(1)
 * 算法进行原地排序，所以为O(1)
 */