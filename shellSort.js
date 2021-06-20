/*
 * @Descripttion: shellSort----选择排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 17:09:30
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-02 18:42:16
 */

// 定义常数gap，将距离为gap的多个元素划分为一组，并在组内各自进行排序
// 不断缩小gap值，进行不同元素间的排序，直到gap为0
function shellSort(arr) {
  // 定义gap
  for (let gap = arr.length / 2; gap > 0; gap = gap >> 1) {
    for (let i = gap; i < arr.length; i++) {
      const value = arr[i];
      // 处理每个gap分组内的排序，每次i递增对应分组内元素数量都会增加
      for (let j = i - gap; j >= 0 && arr[j] > value; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = value;
    }
  }
  return arr;
}