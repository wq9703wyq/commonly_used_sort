/*
 * @Descripttion: countingSort----计数排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:24:17
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 17:28:36
 */

function countingSort(array) {
  let countArr = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    const count = countArr[array[i]] || 0;
    countArr[array[i]] = count + 1;
  }

  for (let j = 0; j < countArr.length; j++) {
    while(countArr[j]) {
      array[index++] = j;
      countArr[j]--;
    }
  }
  return array;
}