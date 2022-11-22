export const toObject = string =>
  string.split('&').reduce((acc, s) => {
    const [name, value] = s.split('=')

    return { ...acc, [name]: value }
  }, {})
