import { Bun } from "bun";

async function main() {
  const bun = new Bun();

  bun.get("/", async (req, res) => {
    const start = performance.now();

    res.send("Hello, World!");

    const end = performance.now();

    console.log(`Tempo de requisição: ${end - start}ms`);

    const time = performance.now() - start;

    res.send(`<p>Tempo de requisição: ${time}ms</p>`);
  });

  await bun.listen(3000);
}

main();
