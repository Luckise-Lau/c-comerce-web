import axios from 'axios'
import { SUCC_CODE, TIMEOUT } from './config'

// 获取幻灯片数据
export const getHomeSlider = async () => {
  try {
    const res = await axios.get('/api/home/slider', { timeout: TIMEOUT })

    if (res.data.code === SUCC_CODE) {
      return res.data.slider
    }

    throw new Error('获取 slider 数据出错!')
  } catch (err) {
    if (err) console.log(err)

    return [{
      linkUrl: 'https://imooc.com',
      picUrl: require('@/assets/images/404.png')
    }]
  }
}
