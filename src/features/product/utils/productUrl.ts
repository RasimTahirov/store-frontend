const productUrl = (url: string) => {
  const urlArray = url.split('/')
  const urlApi = urlArray.pop()

  return urlApi
}

export default productUrl
