<script lang="ts">
	import { ExternalLinkIcon } from 'lucide-svelte'
	import tlt_url from '../../pdfs/TLT_ Multi-fidelity fusion for ADS testing .pdf?url'
</script>

<article>
	<hgroup>
		<h1>Research</h1>
	</hgroup>

	<div class="prose">
		<p>
			Starting from September 2023, I am PhD student at the
			<a href="https://www.sheffield.ac.uk/dcs">Department of Computer Science</a>,
			<a href="https://www.sheffield.ac.uk/">University of Sheffield</a>, Sheffield, UK.
		</p>
		<h2>Autonomous Vehicles Testing</h2>
		<p>
			I am concentrating my research on scenario reconstruction from real-world accidents for robust
			verification and validation of ML-enabled automated driving systems (ADS). This involves
			developing innovative AI testing methodologies.
		</p>
		<h2>Talks</h2>
		<p>
			<a class="external" href={tlt_url} target="_blank"
				>TLT: Multi-fidelity fusion for ADS testing <ExternalLinkIcon /></a
			>
			<!-- <a></a> -->
		</p>
	</div>
</article>

<style>
	.prose {
		margin-top: var(--size-4);
	}
	.external {
		display: flex;
		gap: 5px;
	}
</style>
