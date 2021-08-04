import Widget from './Widget.svelte'

const currentScript = document.currentScript

function initial() {
  if (currentScript) {
    const WidgetContainer = makeWidgetContainer()

    document.body.appendChild(WidgetContainer)

    new Widget({
      target: WidgetContainer,
      props: {
        options: currentScript.dataset,
      },
    })
  }
}

function makeWidgetContainer() {
  let WidgetContainer = document.querySelector('.donation-pocket-container')
  if (!WidgetContainer) {
    WidgetContainer = document.createElement('div')
    WidgetContainer.className = 'donation-pocket-container'
  }
  return WidgetContainer
}

initial()
