/*
 * @Descripttion: insertionSort----直接插入排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 18:17:43
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 17:50:25
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