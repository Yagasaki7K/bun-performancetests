# bun-performancetests
App for evaluating compilation speed between compilers. Actually using Node, Bun and Deno 

We tested it using a simple mathematical calculation using ten decimal places and asked it to perform a series of calculations that for humans are considered complex in a single file

const result = ((a + b) * (c + d)) / (e + f) + g - h;

![image](https://github.com/Yagasaki7K/bun-performancetests/assets/23272064/9c99d1eb-122e-4207-a16b-df7ed0328038)

## How to Install Node?
https://nodejs.org/en

## How to Install Bun?
```shell 
npm install -g bun
```
See the documentation if you dont use a npm: https://bun.sh/blog/bun-v1.0

## How to install Deno?
https://deno.com/

Or if you use a Ubuntu:

`cd /tmp` > `curl -Lo "deno.zip" "https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip"` >
`sudo apt update && sudo apt install unzip` > `sudo unzip -d /usr/local/bin /tmp/deno.zip` > `ls -al /usr/local/bin/deno` > `deno --version`

If you need a more deep explication: https://www.digitalocean.com/community/tutorials/how-to-install-the-deno-javascript-runtime-on-ubuntu-20-04

# Tests using create-next-app@latest
![image](https://github.com/Yagasaki7K/bun-performancetests/assets/23272064/e902a0f2-9469-4bf4-8ebe-75a726a6e29e)

