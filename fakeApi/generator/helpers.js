const IMAGE_PREFIX = 'https://via.placeholder.com/600x450'

export const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

export const getRandomDate = () =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US')

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomHexCode = () => Math.floor(Math.random() * 16777215).toString(16)

export const getRandomPics = city => {
  const count = getRandomNumber(1, 5)
  const imageArray = [...new Array(count)]

  imageArray.forEach((img, i) => {
    imageArray[i] = `${IMAGE_PREFIX}/${getRandomHexCode()}/${getRandomHexCode()}?text=${city}|pic${i + 1}`
  })

  return imageArray
}
