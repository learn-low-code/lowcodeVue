import { guid } from '../../utils/index'

interface baseComponent {
  id: string
  name: string
  showTitle: string
  show: boolean
  cssModule: any
  staticData: any
  function: any
  animation: any[]
}

/**
 *
 * @param name 组件名称
 * @param tempLen 本次层级
 * @returns
 */
function baseComList(name: string, tempLen: any) {
  const list: baseComponent[] = [
    {
      id: guid(),
      name: 'y-div',
      showTitle: `模块${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...compSize(50, 30),
        'background-color': '#eeeeee',
      }, // 样式
      staticData: {
        ...linkData(),
      },
      function: {}, // 方法
      animation: [], // 动画
    },
    {
      id: guid(),
      name: 'y-button',
      showTitle: `按钮${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...compSize(50, 30),
        'color': '#000000',
        'font-weight': 'normal',
        'text-align': 'center',
        'background-color': '#eeeeee',
        'font-size': 14,
      }, // 样式
      staticData: {
        btnValue: '按钮',
        ...linkData(),
      }, // 静态配置
      function: {}, // 方法
      animation: [], // 动画
    },
    {
      id: guid(),
      name: 'y-img',
      showTitle: `图片${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...compSize(100, 60),
        'background-color': '#ffffff00',
      }, // 样式
      staticData: {
        imglUrl:
          'https://6d61-mall-2gdgzk540aab98cd-1257324019.tcb.qcloud.la/staticImg/%E7%B4%A0%E6%9D%90.png',
        ...linkData(),
      }, // 行为
      function: {}, // 方法
      animation: [], // 动画
    },
    {
      id: guid(),
      name: 'y-edit',
      showTitle: `富文本${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...compSize(100, 20),
        color: '#000000',
      }, // 样式
      staticData: {
        html: '<p>一段文本</p>',
      }, // 展示文字
      function: {}, // 方法
      animation: [], // 动画
    },
    {
      id: guid(),
      name: 'y-p',
      showTitle: `文字${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...compSize(100, 20),
        'line-height': 20,
        'font-weight': 'normal',
        'text-align': 'left',
        'background-color': '#ffffff',
        'font-size': 14,
        'text-aligin': 'left',
        'color': '#000000',
      }, // 样式
      staticData: {
        text: '一段文字',
      }, // 展示文字
      function: {}, // 方法
      animation: [], // 动画
    },
    // 业务组件
    {
      id: guid(),
      name: 'y-swiper',
      showTitle: `轮播图${tempLen}`, // 显示组件名称
      show: true,
      cssModule: {
        ...absolute(tempLen),
        ...borderData(),
        ...padAndMar(),
        ...compSize(200, 60),
      }, // 样式
      staticData: {
        // 轮播图数据
        data: [baseSwiper()], // 轮播图数据
        props: {
          autoplay: 2000, // 自动轮播间隔
          showIndicators: true, // 是否显示指示器
          vertical: false,
          indicatorColor: '#1989fa', // 指示器颜色
        },
      }, // 展示文字
      function: {}, // 方法
      animation: [], // 动画
    },
    // 图标组件
  ]
  return list.find(e => e.name === name)
}

/**
 * 统一内外边距封装
 * @returns
 */
function padAndMar() {
  return {
    'margin-top': 0,
    'margin-bottom': 0,
    'margin-left': 0,
    'margin-right': 0,
    'padding-top': 0,
    'padding-bottom': 0,
    'padding-left': 0,
    'padding-right': 0,
    'box-sizing': 'border-box',
  }
}
/**
 * 边框封装
 * @returns
 */
function borderData() {
  return {
    'border-color': '#000000',
    'border-width': 0,
    'border-style': 'solid',
    'border-radius': 0,
  }
}

function baseSwiper() {
  return {
    imglUrl:
      'https://6d61-mall-2gdgzk540aab98cd-1257324019.tcb.qcloud.la/staticImg/%E7%B4%A0%E6%9D%90.png?sign=25d2c8158d6163417af8608cca0ade96&t=1639301025',
    ...linkData(),
  }
}

/**
 * 行为封装
 * @returns
 */
function linkData() {
  return {
    linkType: '0', // 0 无行为 '1' 跳转链接 '2' 电话
    link: '', // 链接地址
    phone: '', // 电话地址
  }
}

/**
 * 子组件根据容器修改定义状态
 * @param contName
 * @param tempLen
 * @returns
 */
function absolute(tempLen: any) {
  return {
    position: 'absolute',
    top: 10 + tempLen * 5,
    left: 10 + tempLen * 5,
  }
}

function compSize(width: any, height: any) {
  return {
    width,
    height,
  }
}

export { baseComponent, baseComList, baseSwiper }
