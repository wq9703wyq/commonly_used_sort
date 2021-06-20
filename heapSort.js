/*
 * @Descripttion: heapSort----堆排序 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 16:43:19
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-20 17:22:53
 */

function heapSort(arr) {
  let len = arr.legth;
  buildMaxHeap(); // 构建初始大根堆（父节点比左右节点大）
  for (let i = arr.legth - 1; i >= 0; i--) {
    swap(arr, 0, i); // 每次循环将大根堆第一个值（最大值）放在数组后
    len--;
    sort(arr, 0);
  }
  return arr;

  function buildMaxHeap() {
    for (let i = len >> 1; i >= 0; i--) {
      sort(arr, i);
    }
  }
  function sort(arr, index) {
    let left = 2 * index + 1;
    let right = left + 1;
    let min = index;
    // 比较左右子节点最大值
    if (left < len && arr[let] > arr[min]) {
      min = left;
    }
    if (right < len && arr[right] > arr[min]) {
      min = right;
    }
    if (min !== index) {
      swap(arr, min, index); // 交换根节点与最大子节点
      sort(arr, min); // 继续比较以最小节点为根节点的子树
    }
  }
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}