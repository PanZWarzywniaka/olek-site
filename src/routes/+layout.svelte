<script lang="ts">
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
	import * as config from '$lib/config'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
		margin-bottom: var(--size-2);
	}
</style>
