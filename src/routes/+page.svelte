<script lang="ts">
</script>

<div class="container">
	<div id="description">
		<h2>Hi! I am Olek</h2>
		<span>PhD Researcher</span>
		<span>Map maker</span>
		<span><a href="https://en.wikipedia.org/wiki/Pierogi">Pierogi</a> enjoyer</span>
	</div>
	<div id="image">
		<img src="me.png" alt="Thats me" />
	</div>
</div>

<style>
	img {
		border: 1px white solid;
	}
	h2 {
		padding-bottom: 20px;
	}
	span {
		padding: 5px;
	}
	#description {
		font-size: var(--font-size-fluid-1);
		display: flex;
		flex-direction: column;
	}
	.container {
		width: 100%;
		display: grid;
		/* padding: 0px 100px 0px 100px; */
		grid-template-columns: 1fr 2fr;
	}
	@media screen and (max-width: 768px) {
		.container {
			grid-template-columns: auto;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
