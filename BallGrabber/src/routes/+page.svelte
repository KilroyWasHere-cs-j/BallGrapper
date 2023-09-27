<script lang="ts">
	import { Heading} from 'flowbite-svelte';
	import { Carousel } from 'flowbite-svelte';
	export const images = [
    {
      alt: 'Cosmic timetraveler',
      src: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
    {
      alt: 'Cristina Gottardi',
      src: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="h-96"/>
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-9xl">Ball Grabber</Heading>
	<Carousel {images} duration="3000" />

</div>

<style>
	:global(body){
        background-color: lightseagreen;
        background-image: url("https://media.istockphoto.com/id/497159547/photo/home-plate.jpg?s=612x612&w=0&k=20&c=1jXQ-KdU59Ou_G_VFeJCjcvG7gAZx2DODKbIAUYFt8o=");
    }
</style>
