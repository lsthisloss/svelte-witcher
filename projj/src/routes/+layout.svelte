<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { currentUser, pb } from '$lib/pocketbase'
</script>

<div>
  <div>
    <slot />
  </div>
</div>
