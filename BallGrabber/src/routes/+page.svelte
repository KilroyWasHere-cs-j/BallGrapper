<script lang="ts">
	import VBuff from '../components/VBuff.svelte';
	import { Heading, P } from 'flowbite-svelte';
	import CardDeck from '../components/CardDeck.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="h-56"/>
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-gray-950" customSize="text-4xl font-extrabold  md:text-5xl lg:text-9xl">Ball Grabber</Heading>
</div>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-gray-950" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">What is the Ball Grabber</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-gray-950">Grabs Baseballs... add more</P>
</div>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-gray-950" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">How does it work?</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-gray-950">Grabs Baseballs... add more</P>
</div>
<CardDeck/>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-gray-950" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Where to get one</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-gray-950">Purchasing info</P>
</div>

<!-- Always keep this at the bottom of the page -->
<VBuff/>

<style>
	:global(body){
        background-color: lightseagreen;
        background-image: url("https://media.istockphoto.com/id/497159547/photo/home-plate.jpg?s=612x612&w=0&k=20&c=1jXQ-KdU59Ou_G_VFeJCjcvG7gAZx2DODKbIAUYFt8o=");
    }
</style>
