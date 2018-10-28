import axios from 'axios'
import Crypto from 'jsencrypt'
import Cookie from '../static/plugin/cookie'

const isTest    = false
const test_root = "******"
const pub_root  = "http://coupon.iimt.me/public/&s="
let   root      = isTest ? test_root : pub_root
//设置axios为form-data
axios.defaults.headers.post['Content-Type']                 = 'application/x-www-form-urlencoded';
axios.defaults.headers.get  ['Content-Type']                = 'application/x-www-form-urlencoded';
                            axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]


/**
 * 获取接口链接
 * @param {*} apiName 接口名称
 */
function getUrl (apiName, needSign = true) {
    let token = Cookie.getCookie('scp_token')
    let sign  = Crypto.encrypt(token)
    let url   = root + apiName
    if(needSign) {
        url = url + '&sign=' + sign
    }
    return url
}

/*******************************************/
/***************** 用户 ********************/
/******************************************/

/**
 * 根据token获取用户
 */
function getUserByToken (token) {
    let url  = getUrl('User.getUserByToken')
    let data = {
        token: token
    }

    return axios.post(url, data)
}

/**
 * 用户登录
 */
function login (name, pass) {
    let url  = getUrl('User.login')
    let data = {
        name: name,
        pass: pass
    }

    return axios.post(url, data)
}

/*******************************************/
/***************** 商品 ********************/
/******************************************/


/*******************************************/
/***************** 订单 ********************/
/******************************************/


/*******************************************/
/***************** 流水 ********************/
/******************************************/


export default {
    /** 用户 */
    getUserByToken,
    login,
    /** 商品 */
}