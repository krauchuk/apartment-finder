const toObject = string => {
  if (!string) return {}

  return string.split('&').reduce((acc, s) => {
    const [name, value] = s.split('=')

    return { ...acc, [name]: value }
  }, {})
}

const toString = object =>
  Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&')

const getAsString = () => window.location.search.slice(1)

const getAsObject = () => toObject(getAsString())

export default {
  toObject,
  toString,
  getAsString,
  getAsObject,
}
