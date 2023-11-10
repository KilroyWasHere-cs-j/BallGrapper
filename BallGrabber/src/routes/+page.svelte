<script>
	import VBuff from '../components/VBuff.svelte';
	import { Button, Heading, P } from 'flowbite-svelte';
	import CardDeck from '../components/CardDeck.svelte';
  	import ButtonComponent from '../components/ButtonComponent.svelte';

	function openOrderPage(){
		window.open("https://www.google.com", "_blank");
	}

	function openEmail(){
		window.location.href = "mailto:towerg1@wit.edu?subject=BallGrabber Inquiry&body="; 
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Main page for the Ball Grabber website" content="BallGrabber" />
</svelte:head>


<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="h-56"/>
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed" customSize="text-4xl font-extrabold md:text-5xl lg:text-9xl">Ball Grabber</Heading>
</div>

<VBuff/>

<div class="w-full h-full flex flex-col justify-center items-center">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed m-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl shadow-lg shadow-baseballRed">What is the Ball Grabber</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-baseballRed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Nullam ac tortor vitae purus faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vitae et leo duis ut diam quam nulla porttitor massa. Suspendisse interdum consectetur libero id. Risus in hendrerit gravida rutrum quisque. Tincidunt arcu non sodales neque sodales. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Sodales ut etiam sit amet. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Scelerisque purus semper eget duis at tellus at urna. Aliquam etiam erat velit scelerisque in dictum. Nec ultrices dui sapien eget. In nulla posuere sollicitudin aliquam ultrices sagittis orci.

		Pretium fusce id velit ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam quisque id diam vel quam elementum pulvinar etiam non. Sagittis aliquam malesuada bibendum arcu vitae elementum. Tortor at risus viverra adipiscing at. Enim praesent elementum facilisis leo vel. Tristique senectus et netus et malesuada. Varius vel pharetra vel turpis nunc eget. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Interdum velit laoreet id donec. Risus sed vulputate odio ut enim blandit volutpat. Ultrices sagittis orci a scelerisque purus semper eget. Quam nulla porttitor massa id.</P>
</div>

<VBuff/>

<div class="w-full h-full flex flex-col justify-center items-center">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed m-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl shadow-lg shadow-baseballRed">How does it work?</Heading>
	<P class="mb-3 text-center" weight="light" color="text-gray-500 dark:text-baseballRed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Nullam ac tortor vitae purus faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vitae et leo duis ut diam quam nulla porttitor massa. Suspendisse interdum consectetur libero id. Risus in hendrerit gravida rutrum quisque. Tincidunt arcu non sodales neque sodales. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Sodales ut etiam sit amet. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Scelerisque purus semper eget duis at tellus at urna. Aliquam etiam erat velit scelerisque in dictum. Nec ultrices dui sapien eget. In nulla posuere sollicitudin aliquam ultrices sagittis orci.

		Pretium fusce id velit ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quam quisque id diam vel quam elementum pulvinar etiam non. Sagittis aliquam malesuada bibendum arcu vitae elementum. Tortor at risus viverra adipiscing at. Enim praesent elementum facilisis leo vel. Tristique senectus et netus et malesuada. Varius vel pharetra vel turpis nunc eget. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Interdum velit laoreet id donec. Risus sed vulputate odio ut enim blandit volutpat. Ultrices sagittis orci a scelerisque purus semper eget. Quam nulla porttitor massa id.</P>
</div>
<CardDeck/>

<VBuff/>

<div class="w-full h-full flex flex-col justify-center items-center">
	<Heading tag="h1" class="mb-4 text-gray-500 dark:text-baseballRed m-10 flex content-center justify-center" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Where to get one</Heading>
	<P class="mb-3 text-center flex content-center justify-center" weight="light" color="text-gray-500 dark:text-baseballRed">If your interested in aquiring your very own ball grabber fel free to reach out.</P>
	<div class="flex content-center justify-center">
		<ButtonComponent on:click={openEmail} symbol={"⚾"} bgColor={"#E63946"}/>
	</div>
</div>

<!-- Always keep this at the bottom of the page -->
<VBuff/>

<div class="bg-baseballRed">
	<span class="w-full h-full flex justify-center items-center text-5xl font-black">RAD</span>
</div>
<p class="flex justify-center">Kilroy Was Here</p>

<!-- <style>
	:global(body){
        background-color: lightseagreen;
        background-image: url("https://media.istockphoto.com/id/497159547/photo/home-plate.jpg?s=612x612&w=0&k=20&c=1jXQ-KdU59Ou_G_VFeJCjcvG7gAZx2DODKbIAUYFt8o=");
    }
</style> -->