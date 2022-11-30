export const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

export const getRandomDate = () =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US')

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomHexCode = () => Math.floor(Math.random() * 16777215).toString(16)
