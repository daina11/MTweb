import Mock from 'mockjs'


const Random = Mock.Random;


Mock.mock(RegExp('ms' + '.*'), "get", getData);
function getData(options) {
    let fenlei = [];
    for (let i = 1; i <= 9; i++) {
        let fenlei1 = {
            id: i,
            name: Random.csentence(2, 4),//分类
        }
        fenlei.push(fenlei1)
    }

    return {
        fenlei: fenlei
    }
}
