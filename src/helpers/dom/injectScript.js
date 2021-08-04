const injectedScripts = []

export function injectScript(src) {
  if (injectedScripts.indexOf(src) >= 0) return
  if (document.querySelector(`script[src="${src}"]`)) return

  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  injectedScripts.push(src)
}
