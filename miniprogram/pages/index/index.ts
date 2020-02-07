// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    text: '51淘甄貨,一个可以省钱的购物平台',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    size: 14,
    orientation: 'left',//滚动方向
    interval_notify: 20, // 时间间隔
    adUrl: '/pages/images/notify.png',

    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],

    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 4000,
    duration: 500
  },

    onLoad() {
    console.log('onload');
    wx.stopPullDownRefresh();
  },

  onPullDownRefresh() {
    this.onLoad();
  },

  go() {
    wx.navigateTo({
      url:"/pages/order_wash/wash"
    })
  },
/*
  onShow() {
    var that  = this;
    var length = that.data.text.length * that.data.size;
    var window_width = wx.getSystemInfoSync().windowWidth;
    that.setData ({
      length:length,
      window_width:window_width,
    });
    that.runMarquee();
  },

  runMarquee() {
    var that = this;
    var interval = setInterval(function() {
      if (-that.data.marqueeDistance < that.data.length) {
        that.setData({
          marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        that.setData({
          marqueeDistance: that.data.window_width
        });
        that.runMarquee();

      }
    }, that.data.interval_notify);
  }*/
})
