<script lang="ts">
	import { Heading} from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="h-56"/>
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-9xl">Ball Grabber</Heading>

</div>

<style>
	:global(body){
        background-color: lightseagreen;
        background-image: url("https://media.istockphoto.com/id/497159547/photo/home-plate.jpg?s=612x612&w=0&k=20&c=1jXQ-KdU59Ou_G_VFeJCjcvG7gAZx2DODKbIAUYFt8o=");
    }
</style>
