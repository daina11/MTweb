import Mock from 'mockjs'


const Random = Mock.Random;


Mock.mock(RegExp('ms' + '.*'), "get", getData);
function getData(options) {
    let fenlei = [];
    let goods =[];
    let congoods=[];

    for (let i = 1; i <= 10; i++) {
        let fenlei1 = {
            id: i,
            name: Random.csentence(2, 4),//分类
            img:Random.dataImage()
        }
        fenlei.push(fenlei1)
    }
    //商品
    for (let i = 1; i <= 12; i++) {
        let good = {
            id: i,
            name: Random.csentence(2, 4),//名字
            img:Random.dataImage(),
            location:Random.county(true),
            money:Random.integer( 10, 50 )
        }
        goods.push(good)
    }
    for (let i = 1; i <= 12; i++) {
        let good = {
            id: i,
            name: Random.csentence(2, 4),//名字
            img:Random.dataImage(),
            location:Random.county(true),
            money:Random.integer( 10, 50 )
        }
        congoods.push(good)
    }
    //个人信息
    let info = {
        id: Random.integer( 10, 50 ),
        name: Random.csentence(2, 4),//名字
        img:Random.dataImage(),//头像 
    }
 
    return {
        fenlei: fenlei,
        goods:goods,
        congoods:congoods,
        info:info
    }
}
