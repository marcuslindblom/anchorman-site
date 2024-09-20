<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { subscribe } from "@strifeapp/strife";

  export let heading = 'Somebody...';

  let unsubscribe: () => void;

  onMount(() => {
    unsubscribe = subscribe((data) => {
      heading = data.heading
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<h1>{heading}</h1>
