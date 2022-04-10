
/**
 * 笛卡尔积组装
 * @param {Array} list
 * @returns []
 */
export default function descartes(list) {
    // parent 上一级索引;count 指针计数
    let point = {}; // 准备移动指针
    let result = []; // 准备返回数据
    let pIndex = null; // 准备父级指针
    let tempCount = 0; // 每层指针坐标
    let temp = []; // 组装当个 sku 结果
  
    // 一：根据参数列生成指针对象
    for (let index in list) {
      if (typeof list[index] === 'object') {
        point[index] = { parent: pIndex, count: 0 };
        pIndex = index;
      }
    }
  
    // 单维度数据结构直接返回
    if (pIndex === null) {
      return list;
    }
  
    // 动态生成笛卡尔积
    while (true) {
      // 二：生成结果
      let index;
      for (index in list) {
        tempCount = point[index].count;
        temp.push(list[index][tempCount]);
      }
      // 压入结果数组
      result.push(temp);
      temp = [];
  
      // 三：检查指针最大值问题，移动指针
      while (true) {
        if (point[index].count + 1 >= list[index].length) {
          point[index].count = 0;
          pIndex = point[index].parent;
          if (pIndex === null) {
            return result;
          }
          // 赋值 parent 进行再次检查
          index = pIndex;
        } else {
          point[index].count++;
          break;
        }
      }
    }
  }
  
  /**
const colors = ['红','黄','绿']
const sizes = [1,2,3]
const others = ['a','b','c'] 
descartes([colors,sizes,others])
   * 
   * 
   * 
   */