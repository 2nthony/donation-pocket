export function resolveOptions(options = {}) {
  const defaultOptions = {
    thanks: 'Thanks for support!',
    position: 'right',
  }

  return {
    ...defaultOptions,
    ...options,
  }
}

export const donationServerUrlPrefix = {
  buyMeACoffee: 'https://buymeacoffee.com/',
  koFi: 'https://ko-fi.com/',
  patreon: 'https://patreon.com/',
  paypal: 'https://paypal.me/',
}

export const donationServerIcon = {
  buyMeACoffee: {
    bg: '#fcdb2f',
    scale: 0.8,
    logo: 'https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg',
  },
  koFi: {
    bg: '#29ABE0',
    scale: 0.9,
    logo: 'https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5c91bddac6c3aa6b3718fd86_kofisvglofo.svg',
  },
  patreon: {
    bg: '#ff424d',
    scale: 0.9,
    logo: 'https://c5.patreon.com/external/favicon/apple-touch-icon.png?v=jw6AR4Rg74',
  },
  paypal: {
    logo: 'https://play-lh.googleusercontent.com/Y2_nyEd0zJftXnlhQrWoweEvAy4RzbpDah_65JGQDKo9zCcBxHVpajYgXWFZcXdKS_o=s180',
  },
}

// DOMStringMap capitalize
const donationServersKey = Object.keys(donationServerUrlPrefix)

export function getDonationButtons(options = {}) {
  const userDonationUsernames = Object.keys(options).filter((key) => {
    return donationServersKey.indexOf(key) >= 0
  })

  return userDonationUsernames.map((server) => {
    return {
      server,
      url: `${donationServerUrlPrefix[server]}${options[server]}`,
    }
  })
}
