This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Intro

The website is deployed on Vercel: https://non-fungible-apes.vercel.app/. (CI integrated)

The storybook preview is deployed on GitHub pages: https://anthowen.github.io/non-fungible-apes/. (CI integrated)

The app is running on Binance Smart Chain testnet, so make sure you have TBNB in your MetaMask wallet. Get it [here](https://testnet.binance.org/faucet-smart). If you don't have BSC testnet added to your MetaMask, use https://chainlist.org/. (Search for BSC testnet, and then add to your MetaMask)


### Pages

- Home page

  On this page, once you connect your wallet, it will preview the **ReNFA** NFTs you owned in a nice UI.
  
  <img width="1240" alt="CleanShot 2021-11-26 at 12 34 46@2x" src="https://user-images.githubusercontent.com/48500079/143615841-939e70e0-ad22-43d0-a76d-4e0ecd336243.png">
  
- Mint page
  
  On this page, you should be able to mint the token that's yet avaiable to claim. Once the transaction is successful, go to the home page to check you got the NFT you requested.
  
- About page

  <img width="1214" alt="CleanShot 2021-11-26 at 12 40 21@2x" src="https://user-images.githubusercontent.com/48500079/143616179-49724a23-e59e-4940-af70-b1feb645efe0.png">


## Tech stack

- Next.js
- TypeScript
- Tailwindcss
- Storybook
- UseDApp
- ethers.js

## How to run

- Development

  On the terminal, run
  
  ```bash
  yarn css:dev
  ```
  
  to enable JIT preview for tailwindcss.
  
  On the other terminal, run
  
  ```bash
  yarn dev
  ```
  
  then, the site should be running on localhost:3000
  
  For storybook preview, run
  ```bash
  yarn storybook
  ```
  
- Deploy

  ```bash
  yarn build
  ```
  
