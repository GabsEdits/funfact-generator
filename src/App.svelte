<script lang="ts">
  import { writable } from 'svelte/store';
  const funfactGenerated = writable(false);
  const category = writable("random");
  const language = writable("en");

  async function fetchFunFact(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }

async function generateFunFact() {
  /* const url = `http://localhost:8000/${$language}/random/${$category}`; */
     const url =  `https://funfact-api.deno.dev/${$language}/random/${$category}`;
    try {
      const funFact = await fetchFunFact(url);
      document.getElementById("result").innerText = funFact;
      funfactGenerated.set(true);
    } catch (error) {
      console.error('Error fetching fun fact:', error);
      document.getElementById("result").innerText = "Failed to fetch fun fact";
    }
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === " " && event.target === document.body) {
      event.preventDefault();
      generateFunFact();
    }
  });
</script>

<main class="mt-20 h-[90vh]">
    <div class="absolute top-10 right-10">
      <select bind:value={$language} class="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 py-2 px-6 rounded-xl w-max transition-colors appearance-none flex items-center justify-center text-center" on:change={() => generateFunFact()}>
        <option value="en">English</option>
        <option value="ro">Română</option>
        <option value="de">Deutsch</option>
      </select>
    </div>

  <h1 class="font-black mb-1 text-3xl">Fun Fact Generator</h1>
  <small class="mb-10 block">Receive a random fun fact</small>

  <section class="flex flex-col gap-1 w-full sm:h-[80%] lg:h-[60%] rounded-xl overflow-hidden">
      <section
        class="bg-zinc-100 dark:bg-zinc-900 p-10 flex flex-col justify-center items-center gap-4 w-full h-full"
      >
        <h2 class="font-bold text-sm">Select a Category</h2>

        <div class="flex flex-row gap-[0.1rem] rounded-xl overflow-hidden">
            <button class={`${$category === 'random' ? 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600' : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700'} transition-colors py-2 px-6`} on:click={() => { category.set("random"); generateFunFact(); }}>Random</button>
            <button class={`${$category === 'science' ? 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600' : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700'} transition-colors py-2 px-6`} on:click={() => { category.set("science"); generateFunFact(); }}>Science</button>
            <button class={`${$category === 'history' ? 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600' : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700'} transition-colors py-2 px-6`} on:click={() => { category.set("history"); generateFunFact(); }}>History</button>
            <button class={`${$category === 'geography' ? 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600' : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700'} transition-colors py-2 px-6`} on:click={() => { category.set("geography"); generateFunFact(); }}>Geography</button>
        </div>
      </section>

    <section
      class="bg-zinc-100 dark:bg-zinc-900 p-10 flex flex-col justify-center items-center gap-4 w-full h-full"
    >
      <h2 class="font-bold text-sm">Result</h2>
        <p id="result" class="text-3xl font-black">Empty</p>
        {#if $funfactGenerated}
          <button class="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 py-2 px-6 rounded-xl w-max transition-colors" on:click={() => generateFunFact()}>Regenerate</button>
        {/if}
    </section>
  </section>

  <footer class="flex flex-col gap-3 mt-10 items-center justify-center">

    <div class="flex flex-row gap-2">
    <a
      href="https://github.com/GabsEdits/compliment-generator"
      target="_blank"
      class="underline text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-zinc-950 transition-colors font-extrabold duration-500"
      >Source Code</a
    >

    <a
        href="https://funfact-api.deno.dev"
        target="_blank"
        class="underline text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-zinc-950 transition-colors font-extrabold duration-500"
        >API</a
        >
    </div>

    <p>
      Made with ❤️ for <a
        class="font-black underline text-black dark:text-white transition-colors"
        href="https://highseas.hackclub.com">Highseas</a
      >
    </p>
    <p class="flex flex-col gap-1">
      <small><b>Tip:</b> Press Space to regenerate a fun fact</small>
    </p>
  </footer>
</main>
