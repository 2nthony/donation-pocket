<script>
  export let price
  export let priceHint
  export let features

  let className
  export { className as class }
</script>

<div class={`pricing-card border border-gray-200 rounded-lg ${className}`}>
  <div class="price border-b border-gray-200 p-8 text-center">
    <h3 class="text-3xl font-bold">{price}</h3>
    {#if priceHint}
      <p class="text-gray-400 mt-3">{priceHint}</p>
    {/if}
  </div>
  <div class="p-8">
    <div class="features mb-8">
      <ul>
        {#each features as feature}
          <li class="text-gray-600 mb-2">{@html feature}</li>
        {/each}
      </ul>
    </div>

    <slot />
  </div>
</div>
