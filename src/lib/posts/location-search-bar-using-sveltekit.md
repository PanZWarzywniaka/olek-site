---
title: "How to code: A responsive search bar in SvelteKit"
description: "This tutorial with show you how to create a responsive location search box fetching remote data in SvelteKit." 

date: "2024-2-12"

categories:
    - sveltekit
    - guides
    - osm

published: true
---

## <a href="https://sveltekit-searchbox-demo.pages.dev/">See demo</a>

## Introduciton

When I was coding my <a href="https://maps.olek.site/" target="_blank">map making website</a> got to an issue of how to create a responsive location search box like one on Google maps:


![alt text](google_search_box.gif)

Important feature to me was that results would be shown as user is typing. I didn't want the user to click `Search` button and wait for the results.

## API endpoint

For the location search endpoint I will be using <a href="https://nominatim.org/" target="_blank">Nominatim API</a> . An Open-source geocoding using OpenStreetMap data.

## Data structure

Quering `/search` endpoint returns a list of places as JSON object. <a href="https://nominatim.org/release-docs/latest/api/Output/">See docs </a> for more details. For me the interesing bits were:

- Name
- Latitude and Longitude
- Address type 

The latter is useful when e.g. a city and state share the same name like "New York".

The following response I mapped to TypeScript interface in `$lib/osm_nominatim.ts`


```ts
export interface OSMNominatimPlace {
    addresstype: string
    boundingbox: number[]
    class: string
    display_name: string
    lat: string
    lon: string
    name: string
    type: string
}

```

## Fetching places

Nothing too fancy here, prepared a async function that makes API call and casts responses to `OSMNominatimPlace` interface.

```ts 

export const getLocations = async (query: string): Promise<OSMNominatimPlace[]> => {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&limit=10&format=json`
    const response = await (await fetch(url)).json()
    const locations = response as OSMNominatimPlace[]

    return locations
}

```

## Debouncing

Having prepared above functions I thought of fetching location on every key stroke, but I quickly realised that I need debouncing.

Depending on latency fetch request back and forth can take 1000ms. People typing quickly can type quicker than that.


For example take a user looking for "London". So they type each letter every ~200ms.
When doing requests on each keystroke you would clog UI with subsequent API calls for "L", "Lo", "Lon", "Lond" etc.

It makes sense to "debounce" user input which effectively means wait small delay when user stops typing.
This code found at great <a href="https://www.okupter.com/blog/svelte-debounce">blog post by Justin Ahinon</a> Check out his posts for more Svelte content.


```ts
export const debounce = (callback: Function, wait = 300) => {
    let timeout: ReturnType<typeof setTimeout>

    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), wait)
    }
}

```

Note: When your API is not free you can save a lot with debouncing.

## Displaying results in UI

Having all building blocks, now it's just a matter of putting them together in single `.svelte` component.
Again <a href="https://sveltekit-searchbox-demo.pages.dev/">see demo</a> to check how it works in practice.

```svelte

<script lang="ts">
    import { debounce } from "$lib/index";
    import { getLocations, type OSMNominatimPlace } from "$lib/osm_nominatim";

    let foundLocations: OSMNominatimPlace[] = [];
    let query: string = "";

    const searchLocations = async (event: KeyboardEvent) => {
        foundLocations = await getLocations(query);
    };
</script>

<input
    type="search"
    placeholder="Search location"
    bind:value={query}
    
    //search location on each keystroke with debounce
    on:input={debounce(searchLocations)} 
/>
{#each foundLocations as location}
    <ul>
        <li>
            {location.display_name}
        </li>
    </ul>
{/each}

```