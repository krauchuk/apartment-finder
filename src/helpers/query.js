export const toObject = string => {
  if (!string) return {}

  return string.split('&').reduce((acc, s) => {
    const [name, value] = s.split('=')

    return { ...acc, [name]: value }
  }, {})
}

export const toString = object =>
  Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&')

export const getLikeString = () => window.location.search.slice(1)

export const getLikeObject = () => toObject(getLikeString())
