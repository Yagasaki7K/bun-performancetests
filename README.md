# bun-performancetests
App for evaluating compilation speed between compilers. Actually using Node, Bun and Deno 

We are actually testing only using Hello World. Individually we result a time in ms from every request. If you want to show everything run `node test` and he will show to you a test in same time using the three compilers.

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