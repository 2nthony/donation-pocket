<script>
  import './assets/index.css'
  import { resolveOssParams } from './helpers/oss/ali'
  import PricingCard from './components/PricingCard.svelte'
  import GumroadLink from './components/GumroadLink.svelte'
</script>

<main class="mx-auto max-w-2xl">
  <h1>Donation Pocket</h1>
  <h3 class="text-2xl font-light">
    Collect your all
    <span class="text-indigo-500">donation links</span>
    in pocket.
  </h3>
  <h4 class="text-xl mt-16 font-light">
    Donation Pocket is a widget to collect your all donation links in one place
    on webpage, including Buy Me a Coffee, ko-fi, patreon, paypal or more.
  </h4>

  <img
    class="transform -rotate-45 skew-x-12 mx-auto"
    src={resolveOssParams(
      `https://evilaassets.oss-cn-shanghai.aliyuncs.com/uPic/2021/08/FGpcVV.png`,
      ['style/jpg'],
    )}
    alt="cover"
  />

  <h2 class="text-5xl mb-10 text-center font-bold">Pricing</h2>

  <div class="md:grid grid-cols-2">
    <PricingCard
      price="$0"
      priceHint="Free"
      features={['<b>Unlimited</b> Websites', 'Free updates <b>forever</b>']}
      class="mx-4 -md:mb-6"
    >
      <div class="text-center">
        <GumroadLink pid="qRbAg">Try Now</GumroadLink>
      </div>
    </PricingCard>

    <PricingCard
      price="$5"
      priceHint="🐦 Early bird price"
      features={[
        '<b>Unlimited</b> Websites',
        'Free updates <b>forever</b>',
        'Custom Avatar',
        'Custom Url',
        'Custom branding(remove or add yours)',
        'Tracking(gtag)',
        'Pro features in future',
      ]}
      class="mx-4"
    >
      <div class="text-center">
        <GumroadLink pid="PckvH">I want this!</GumroadLink>
      </div>
    </PricingCard>
  </div>

  <footer class="text-sm mt-48 mb-24 text-gray-600">
    © {new Date().getFullYear()}
    <a href="https://aotunote.com" class="text-indigo-500">aotunote.com</a>.
    Authored by
    <a href="https://twitter.com/evillt" class="text-indigo-500">2nthony</a>.
  </footer>
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    @apply text-indigo-500;
    font-size: 4rem;
    line-height: 1.1;
    margin: 2rem auto;
  }
</style>
