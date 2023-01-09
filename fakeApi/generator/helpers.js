const IMAGE_PREFIX = 'https://via.placeholder.com/600x450'

export const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

export const getRandomDate = () => +new Date(+new Date() - Math.floor(Math.random() * 10000000000))

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

export const getRandomReviews = count => {
  const result = []

  for (let i = 0; i <= count; i += 1) {
    result.push({
      name: getRandomItem(['Adam', 'Eve', 'Max', 'Itan', 'Joe', 'Bob']),
      rating: getRandomNumber(1, 5),
      text: getRandomItem(['OK', 'Not ok', 'So-so', 'Disgusting', 'Excellent', 'Scammers!']),
    })
  }

  return result
}
