import { require } from "https://deno.land/std@0.115.0/core/module";
const child_process = require("child_process");

async function testCompilers() {
  const burn_script = "burn run burn.js";
  const node_script = "node run node.js";
  const deno_script = "deno run --allow-net deno.js";

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes}m ${seconds}s ${milliseconds}ms`;
  };

  const run_script = async (script) => {
    const start = performance.now();
    const process = await child_process.spawn(script, { shell: true });
    const end = performance.now();
    const time = end - start;

    return time;
  };

  const promises = [
    run_script(burn_script),
    run_script(node_script),
    run_script(deno_script),
  ];

  await Promise.all(promises);

  const burn_time = promises[0].then((time) => {
    console.log("Burn:", formatTime(time));
  });

  const node_time = promises[1].then((time) => {
    console.log("Node:", formatTime(time));
  });

  const deno_time = promises[2].then((time) => {
    console.log("Deno:", formatTime(time));
  });
}

testCompilers();
