/*
 * @Author: your name
 * @Date: 2021-10-12 15:19:37
 * @LastEditTime: 2021-10-12 15:22:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \util\src\lib\extend\nestedHandler.js
 */

/**
 * @description: 解决多重嵌套条件业务
 * @param {Array} mapArr: 数组
 * @param {Function} cb
 * @param {Function} othoer
 */
export default function nestedHandler(mapArr, cb, othoer){
    const action = mapArr.find(cb)
    action ? action[1]() : othoer && othoer()
}


/**
 * 
const orderType = 1 // 1: 美妆，2：电器，3：家具
const orderWay = 1 // 1：h5，2：app，3：小程序

if (orderType === 1) {
  if (orderWay === 1) {
    console.log('美妆订单h5')
  } else if (orderWay === 2) {
    console.log('美妆订单app')
  } else if (orderWay === 3) {
    console.log('美妆订单小程序')
  }
} else if (orderType === 2) {
  if (orderWay === 1) {
    console.log('电器订单h5')
  } else if (orderWay === 2) {
    console.log('电器订单app')
  } else if (orderWay === 3) {
    console.log('电器订单小程序')
  }
} else if (orderType === 3) {
  if (orderWay === 1) {
    console.log('家具订单h5')
  } else if (orderWay === 2) {
    console.log('家具订单app')
  } else if (orderWay === 3) {
    console.log('家具订单小程序')
  }
}
 * 
 * 
 * 
 */

/**
 * 
 const mapArr = [
      [
          {
              orderType: 1,
              orderWay: 1
          },
          () => {
              console.log('美妆订单h5')
          }
      ],
      [
          {
              orderType: 1,
              orderWay: 2
          },
          () => {
              console.log('美妆订单app')
          }
      ],
      [
          {
              orderType: 1,
              orderWay: 3
          },
          () => {
              console.log('美妆订单小程序')
          }
      ],
      [
          {
              orderType: 2,
              orderWay: 1
          },
          () => {
              console.log('电器订单h5')
          }
      ],
      [
          {
              orderType: 2,
              orderWay: 2
          },
          () => {
              console.log('电器订单app')
          }
      ],
      [
          {
              orderType: 2,
              orderWay: 3
          },
          () => {
              console.log('电器订单小程序')
          }
      ],
      [
          {
              orderType: 3,
              orderWay: 1
          },
          () => {
              console.log('家具订单h5')
          }
      ],
      [
          {
              orderType: 3,
              orderWay: 2
          },
          () => {
              console.log('家具订单app')
          }
      ],
      [
          {
              orderType: 3,
              orderWay: 3
          },
          () => {
              console.log('家具订单小程序')
          }
      ]
  ]

const nestedHandler = (mapArr, cb, othoer) => {
    const action = mapArr.find(cb)
    action ? action[1]() : othoer && othoer()
}
const orderType = 1 // 1: 美妆，2：电器，3：家具
const orderWay = 1 // 1：h5，2：app，3：小程序
// 自定义条件
nestedHandler(
    mapArr,
    ([key]) => {
        return key.orderType === orderType && key.orderWay === orderWay
    },
    () => {
        console.log('没有找到久执行这个方法')
    }
)

 * 
 * 
 */