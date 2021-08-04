<script>
  export let href
  export let style

  let className
  export { className as class }
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className} {style}
  ><slot /></a
>
