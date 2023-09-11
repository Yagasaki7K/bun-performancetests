const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `Milliseconds: ${milliseconds}`;
};

const start = performance.now();

const a = 1000000000;
const b = 2000000000;
const c = 3000000000;
const d = 4000000000;
const e = 5000000000;
const f = 6000000000;
const g = 7000000000;
const h = 8000000000;

const result = ((a + b) * (c + d)) / (e + f) + g - h;

const end = performance.now();

const time = end - start;

console.log(
  `Rendering time: Started at ${formatTime(start)} - Ended at ${formatTime(
    end
  )} and it all took ${formatTime(time)}ms`
);
