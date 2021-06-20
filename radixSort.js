/*
 * @Descripttion: radixSort---基数排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:55:34
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 18:08:03
 */

/**
 * 
 * @param {*} array 
 * @param {*} maxDight 元素最大位数 
 * @returns 
 */
function radixSort(array, maxDight = 4) {
  const bucket = [];
  let mod = 10;
  let unit = 1;
  for (let i = 0; i < maxDight; i++) {
    for (let j = 0; j < array.length; j++) {
      const index = parseInt((array[j] % mod) /unit);
      if (bucket[index]) {
        bucket[index].push(array[j]);
      } else {
        bucket[index] = [array[j]];
      }
    }
  }

  let pos = 0;
  for (let k = 0; k < bucket.length; k++) {
    const bucketSingle = bucket[k];
    if (!bucket) {
      continue;
    }
    let value = bucketSingle.shift();
    while(value !== undefined) {
      array[pos++] = value;
      value = bucketSingle.shift();
    }
    mod *= 10;
    unit *= 10;
  }
  return array;
}