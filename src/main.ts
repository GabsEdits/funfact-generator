import "./app.css";
import App from "./App.svelte";
import "non.geist";
import "non.geist/mono";

const app = new App({
  target: (globalThis as any).document.getElementById("app")!,
});

export default app;
