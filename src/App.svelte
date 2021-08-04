<script>
  import './assets/index.css'
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

  <div class="mt-20">
    <GumroadLink pid="qRbAg">Try Now</GumroadLink>
  </div>
</main>

<style>
  main {
    text-align: center;
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
