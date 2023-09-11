import { http } from "https://deno.land/std/http/mod.ts";

async function main() {
  const start = performance.now();

  const server = await http.createServer((req, res) => {
    res.send("Hello, World!");
  });

  server.listen(3000);

  const end = performance.now();

  console.log(`Tempo de requisição: ${end - start}ms`);
}

main();
