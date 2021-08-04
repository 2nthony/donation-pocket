<script>
  import { donationServerIcon } from '../options'
  import Link from './Link.svelte'

  export let server
  export let url
</script>

<div
  class="w-12 h-12 rounded-full cursor-pointer mb-2 overflow-hidden opacity-70 hover:opacity-100"
  style={`background-color: ${donationServerIcon[server].bg}`}
>
  <Link class="w-full h-full flex justify-center items-center" href={url}>
    {#if donationServerIcon[server].logo}
      <img
        src={donationServerIcon[server].logo}
        alt={server}
        class="rounded-full w-full h-full"
        style={`transform: scale(${donationServerIcon[server].scale || 1})`}
      />
    {:else}
      {@html donationServerIcon[server].svg}
    {/if}
  </Link>
</div>
