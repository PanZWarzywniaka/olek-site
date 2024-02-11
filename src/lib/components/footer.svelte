<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<div id="icons">
		<a href="https://github.com/PanZWarzywniaka" target="_blank">
			<img src="github-mark-white.svg" alt="Your Icon" />
		</a>

		<a href="https://www.linkedin.com/in/olek-osikowicz-02018a251/" target="_blank">
			<img src="LI-In-Bug.png" alt="Your Icon" />
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
