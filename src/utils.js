export const reverse = array => array.map((item, index) => array[ array.length - 1 - index ])

export const isMobile = () => {
  const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  return currentWidth < 800
}