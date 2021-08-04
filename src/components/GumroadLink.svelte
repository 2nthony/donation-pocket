<script context="module">
  import { injectScript } from '../helpers/dom/injectScript'
  injectScript('https://gumroad.com/js/gumroad.js')
</script>

<script>
  export let pid
  export let wanted = true
  export let singleProduct = true

  $: url = `https://gumroad.com/l/${pid}?${wanted ? 'wanted=true' : ''}`
</script>

<a class="gumroad-button" href={url} data-gumroad-single-product={singleProduct}
  ><slot /></a
>
