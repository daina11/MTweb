import Mock from 'mockjs'


const Random = Mock.Random;


Mock.mock(RegExp('ms' + '.*'), "get", getData);
function getData(options) {
    let fenlei = [];
    let goods =[];
    for (let i = 1; i <= 9; i++) {
        let fenlei1 = {
            id: i,
            name: Random.csentence(2, 4),//分类
            img:Random.dataImage()
        }
        fenlei.push(fenlei1)
    }
    //商品
    for (let i = 1; i <= 20; i++) {
        let good = {
            id: i,
            name: Random.csentence(2, 4),//名字
            img:Random.dataImage()
        }
        goods.push(good)
    }
    return {
        fenlei: fenlei,
        goods:goods
    }
}
