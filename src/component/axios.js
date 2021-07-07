import axios from 'axios'

const prefix = "http://39.106.193.254:10010"

function getData() {
    axios({
        url: `${prefix}/isoftstone/dms/auth/getMapCsv`,
        // params:{
        //     name:'kjh',
        //     age:29
        // },
        method: 'get'
    }).then(
        res => console.log(res)
    ).catch(
        err => console.error(err)
    )
}

function axiosGetData(){
   return axios({
        url:`${prefix}/isoftstone/dms/auth/getMapCsv`,
        methods:'get'
    })
}
function postData(mydata) {
    return axios({
        url: `${prefix}/isoftstone/dms/auth/fileGenerate`,
        data: mydata,
        method: 'post'
    })
}
export {
    // import导入要加花括号
    // export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同，而export default命令对外输出的变量名可以是任意的，这时import命令后面，不使用大括号。
    getData,
    postData,
    axiosGetData
}