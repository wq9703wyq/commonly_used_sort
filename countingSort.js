/*
 * @Descripttion: countingSort----计数排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:24:17
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 23:19:53
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

/** 时间复杂度 
 * 根据array的长度进行n次遍历，再根据countArr的长度进行K次遍历
 * countArr长度和序列最大值相等，即O(n + k)
*/

/** 空间复杂度 
 * 新建countArr数组，长度由最大值K决定，每一个元素皆为数组
 * 所有子元素数组长度相加等于array长度，即O(n + k)
*/