export function resolveOssParams(url, params) {
  const newUrl = new URL(url)
  newUrl.searchParams.append('x-oss-process', params.join(','))
  return newUrl.toString()
}
