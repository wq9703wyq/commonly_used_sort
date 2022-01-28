/*
 * @Descripttion: heapSort----堆排序 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-20 16:43:19
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-01-09 01:23:19
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
    let max = index;
    // 比较左右子节点最大值
    if (left < len && arr[left] > arr[max]) {
      max = left;
    }
    if (right < len && arr[right] > arr[max]) {
      max = right;
    }
    if (max !== index) {
      swap(arr, max, index); // 交换根节点与最大子节点
      sort(arr, max); // 继续比较以最大节点为根节点的子树
    }
  }
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

/** 时间复杂度 
 * sort对二叉树进行递归，不同层级的节点递归深度为log2 n
 * 初始构建大根堆进行了(n / 2) * log2 n次循环，后续进行排序则进行了(n - 1) * log2 n次循环
 * 即(n / 2) * log2 n + (n - 1) * log2 n，简化为O(n * log n)
*/

/** 空间复杂度 O(1)
 * 算法进行原地排序，所以为O(1)
 */