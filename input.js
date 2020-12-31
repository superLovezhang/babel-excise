// 新的语法 env能够转换
const pickObjFromArrByPropertiesValue = (arr, propertiesValue) => {
    for (let obj of arr) {
        // 新的API env也无能为力 但是polyfill(已经废弃，拆解为core.js负责模拟全局变量和api和regenerator负责将模拟的全局变量和api换个名字防止全局污染)可以创建出ES5的环境
        for (let value of Object.values(obj)) {
            if (value === propertiesValue) return obj
        }
    }
    return null
}

// 新的全局变量 env无能为力
let myPromise = function request(param) {
    return new Promise((resolve, eject) => {
        if (param >= 5) resolve('success！！！')
        else eject('error！！！')
    })
}

let data = [
    {
        name: '张三',
        age: 21,
        sex: '男'
    },
    {
        name: '李四',
        age: 24,
        sex: '女'
    },
    {
        name: '张五',
        age: 19,
        sex: '男'
    },
]

class Person {
    constructor() {
        this.super()
        this.name = '张三'
    }

    state = {}
}

let sy = Symbol(1)

console.log(pickObjFromArrByPropertiesValue(data, "张三"))
myPromise(5).then(res => console.log(res))
    .catch(err => console.log(err))