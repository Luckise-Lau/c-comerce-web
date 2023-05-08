function setFontSizeFn (designWidth, unit) {
  const Html = document.getElementsByTagName('html')[0]
  let realWidth = document.documentElement.clientWidth

  realWidth > designWidth && (realWidth = designWidth)
  Html.style.fontSize = `${realWidth / designWidth * unit}px`
}

setFontSizeFn(375, 100)

// 监听手机旋转事件
window.addEventListener('orientationchange', () => {
  setFontSizeFn(375, 100)
})

// resize 事件
window.addEventListener('resize', () => {
  setFontSizeFn(375, 100)
})
