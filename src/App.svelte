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
      `https://evilaassets.oss-cn-shanghai.aliyuncs.com/uPic/2021/08/EBUFvJ.png`,
      ['style/jpg'],
    )}
    alt="cover"
  />

  <h2 class="text-5xl mb-10 text-center font-bold">Pricing</h2>

  <div class="grid grid-cols-2">
    <PricingCard
      price="$0"
      priceHint="Free"
      features={['<b>Unlimited</b> Websites', 'Free updates <b>forever</b>']}
      class="mx-4"
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
        'Custom link',
        'Analytics tracking(Google)',
        'Remove branding',
        'Source code(Svelte)',
        'Cryptocurreny donation(coming soon)',
        'Pro features in future',
      ]}
      class="mx-4"
    >
      <div class="text-center" />
    </PricingCard>
  </div>
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
