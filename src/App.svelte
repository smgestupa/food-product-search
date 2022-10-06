<script>
  import { Route } from "tinro";
  import Nav from "@semantics/Nav.svelte";
  import Index from "@routes/Index.svelte";
</script>

<Nav/>

<Route path="/">
  <Index/>
</Route>
