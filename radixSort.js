/*
 * @Descripttion: radixSort---基数排序
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 17:55:34
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-21 00:09:46
 */

/**
 * 
 * @param {*} array 
 * @param {*} maxDight 元素最大位数 
 * @returns 
 */
function radixSort(arr, maxDigit = 4) {
  const buckets = [];
  let mod = 10, unit = 1;
  for (let i = 0; i < maxDigit; i++) {
    for (let j = 0; j < arr.length; j++) {
      const index = parseInt((arr[j] % mod) / unit);
      if (buckets[index]) {
        buckets[index].push(arr[j]);
      } else {
        buckets[index] = [arr[j]];
      }
    }
    let pos = 0;
    for (let n = 0; n < buckets.length; n++) {
      const bucket = buckets[n];
      if (!bucket) { continue; }
      let value = bucket.shift();
      while (value !== undefined) {
        arr[pos++] = value;
        value = bucket.shift();
      }
    }
    mod *= 10;
    unit *= 10;
  }
  return arr;
}

/** 时间复杂度
 * 桶排序时间随最大数的位数k与数组长度n决定；在k次循环内首先进行n次桶分配，即O(n)，再将进行n次倒出元素操作，即O(n)，总为O(2n)
 * k次循环后即为，O(2nk)，简化为O(nk)
*/

/** 空间复杂度 
 * 新增数组buckets，最大长度为10，每次倒出元素时都会新增一个数组，一次循环最多生成10个数组，k次循环即O(10k)
 * 所有子元素数组长度相加等于array长度，即O(n + 10k)，简化O(n + k)
*/