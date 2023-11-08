<script>
	import VBuff from '../components/VBuff.svelte';
	import { Button, Heading, P } from 'flowbite-svelte';
	import CardDeck from '../components/CardDeck.svelte';
  	import ButtonComponent from '../components/ButtonComponent.svelte';

	function openOrderPage(){
		window.open("https://www.google.com", "_blank");
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="h-56"/>
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed" customSize="text-4xl font-extrabold  md:text-5xl lg:text-9xl">Ball Grabber</Heading>
</div>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">What is the Ball Grabber</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-gray-950 border-solid border-2 border-sky-500 rounded-lg">Grabs Baseballs... add more</P>
</div>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">How does it work?</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-baseballRed">Grabs Baseballs... add more</P>
</div>
<CardDeck/>

<VBuff/>

<div class="">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Where to get one</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-baseballRed">Purchasing info</P>
	<div class="flex content-center justify-center">
		<ButtonComponent on:click={openOrderPage} symbol={"⚾"} bgColor={"#E63946"}/>
	</div>
</div>

<!-- Always keep this at the bottom of the page -->
<VBuff/>

<style>
	:global(body){
        background-color: lightseagreen;
        background-image: url("https://media.istockphoto.com/id/497159547/photo/home-plate.jpg?s=612x612&w=0&k=20&c=1jXQ-KdU59Ou_G_VFeJCjcvG7gAZx2DODKbIAUYFt8o=");
    }
</style>