<script lang="ts">
	import * as config from '$lib/config'
	import { theme } from '$lib/stores/theme'
	import github_logo_white from '$lib/assets/footer/github-mark-white.svg'
	import github_logo_dark from '$lib/assets/footer/github-mark.svg'
	import linkedin_logo from '$lib/assets/footer/linkedin.png'
	// import { Linkedin } from 'lucide-svelte'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<div id="icons">
		{#if $theme === 'dark'}
			<a href="https://github.com/PanZWarzywniaka" target="_blank">
				<img src={github_logo_white} alt="Your Icon" />
			</a>
		{:else}
			<a href="https://github.com/PanZWarzywniaka" target="_blank">
				<img src={github_logo_dark} alt="Your Icon" />
			</a>
		{/if}

		<a href="https://www.linkedin.com/in/olek-osikowicz-02018a251/" target="_blank">
			<img src={linkedin_logo} alt="Your Icon" />
		</a>
	</div>
</footer>

<style>
	img {
		width: 50px;
	}
	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-block: var(--size-4);
		border-top: 1px solid var(--border);
	}
	#icons {
		display: flex;
		gap: 20px;
	}
	p {
		color: var(--size-2);
	}
</style>
