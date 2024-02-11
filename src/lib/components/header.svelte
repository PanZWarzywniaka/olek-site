<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from '$lib/components/toggle.svelte'
	import { ExternalLinkIcon } from 'lucide-svelte'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/research">Research</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="https://maps.olek.site/" target="_blank">Pretty maps<ExternalLinkIcon /></a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
		border-bottom: 1px solid var(--border);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
		overflow: hidden;
		display: flex;
		gap: 5px;
	}

	@media (min-width: 760px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
