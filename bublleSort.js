/*
 * @Descripttion: bubbleSort----冒泡排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-02 16:52:53
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 20:30:12
 */

// 进行arr.length次大循环，每次大循环内按顺序对所有相邻元素的两两比较
// 每次比较中较大的元素后移一位，完成所有比较后，最后的元素就会是最大的数
// 重复以上步骤，直到所有元素排序完毕
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

/** 时间复杂度 O(n ^ 2)
 * 在O(n)次的循环里进行O(n-1)次循环，简化为O(n ^ 2)
 */

/** 空间复杂度 O(1)
 * 算法进行原地排序，所以为O(1)
 */