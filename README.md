<div align="center">
<h1>Funfact Generator</h1>
<p>Generate random fun facts for any occasion.</p>
<mark>Made for Highseas.</mark>
</div>

## Links

- Frontend: [funfact.gxbs.dev](https://funfact.gxbs.dev)
- API: [funfact-api.deno.dev](https://funfact-api.deno.dev)

## API

For the API, I used [Deno](https://deno.com) and
[Hoco](https://jsr.io/@hoco/hoco).

### Examples

For a random fun fact:

```http
GET https://funfact-api.deno.dev/{language}/random/random
```

`{language}` is the language of the fun fact. Currently, the only supported

For a random history fun fact:

```http
GET https://funfact-api.deno.dev/{language}/random/history
```

`{language}` is the language of the fun fact. Currently, the only supported
languages are:

- `en`: English
- `ro`: Romanian
- `de`: German

For example, if you want to get a random fun fact in English, you would use:

```http
GET https://funfact-api.deno.dev/en/random/random
```

The categories are:

- `random`: Random fun fact from all categories

- `history`: Fun fact from history

- `science`: Fun fact from science

- `geography`: Fun fact from space

### Development

Make sure you have [Deno](https://deno.com) installed.

To start the server, run:

```bash
deno run -NR mod.ts
```

> ![NOTE] Make sure you are in the `api` directory.

## Frontend

### Development

The project is build using [Vite](https://vite.dev) and
[Svelte](https://svelte.dev).\

Make sure you have [Deno](https://deno.com) installed.

### Installation

```bash
deno install
```

### Scripts

- `dev`: Start the development server (`deno task dev`)
- `build`: Build the project (`deno task build`)
- `preview`: Serve the build project (`deno task preview`)

## License

This project is licensed under the GNU Affero General Public License v3.0. See
the [LICENSE](LICENSE.txt) file for more information.
