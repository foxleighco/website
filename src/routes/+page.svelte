<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Ventures from '$lib/components/Ventures.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Foxleigh & Co</title>
</svelte:head>

<Header />

<main id="main">
  <Hero />
  <About />
  <Ventures />
  <Contact />
</main>

<Footer />
