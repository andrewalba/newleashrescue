# New Leash Rescue Nuxt 3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Environment

You can download and update the environmental variables from the parameter store.

[development]

```shell
aws ssm get-parameter \
--region us-east-1 \
--name /new-leash-rescue/app/.env.development \
--profile newleashrescue \
--query Parameter.Value \
--with-decryption \
--output text > .env.development
```

```shell
aws ssm put-parameter \
--region us-east-1 \
--name /new-leash-rescue/app/.env.development \
--profile newleashrescue \
--value file://.env.development \
--type "SecureString" \
--overwrite
```

[production]

```shell
aws ssm get-parameter \
--region us-east-1 \
--name /new-leash-rescue/app/.env.production \
--profile ochofitnewleashrescueness \
--query Parameter.Value \
--with-decryption \
--output text > .env.production
```

```shell
aws ssm put-parameter \
--region us-east-1 \
--name /new-leash-rescue/app/.env.production \
--profile newleashrescue \
--value file://.env.production \
--type "SecureString" \
--overwrite
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Amplify

Amplify Gen 2 collects anonymous telemetry data about general usage of the CLI. 
Participation is optional, and you may opt-out by using `npx ampx configure telemetry disable`. 
To learn more about telemetry, visit https://docs.amplify.aws/gen2/reference/telemetry

## Assets

### Colors

[Vibrant Color Fiesta](https://coolors.co/palette/ffbe0b-fb5607-ff006e-8338ec-3a86ff)

| Color Name   | Hex Code                                                                                          |
|--------------|---------------------------------------------------------------------------------------------------|
| Amber Gold   | <div style="display: inline-block; width: 16px; height: 16px; background-color: #ffbe0b;"></div> #ffbe0b |
| Blaze Orange | <div style="display: inline-block; width: 16px; height: 16px; background-color: #fb5607;"></div> #fb5607 |
| Neon Pink    | <div style="display: inline-block; width: 16px; height: 16px; background-color: #ff006e;"></div> #ff006e |
| Blue Violet  | <div style="display: inline-block; width: 16px; height: 16px; background-color: #8338ec;"></div> #8338ec |
| Azure Blue   | <div style="display: inline-block; width: 16px; height: 16px; background-color: #3a86ff;"></div> #3a86ff |

### Fonts


### Images

Photo by [Chewy](https://unsplash.com/@chewy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on 
[Unsplash](https://unsplash.
com/photos/person-in-blue-denim-jeans-holding-white-and-black-short-coated-small-dog-NVIyVF2Ecp0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Chewy](https://unsplash.com/@chewy?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/black-white-and-brown-short-coated-dog-fGxiRXr2oZg?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Katt Yukawa](https://unsplash.com/@kattyukawa?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.
com/photos/person-showing-both-hands-with-make-a-change-note-and-coins-K0E6E0a0R3A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Andrew S](https://unsplash.com/@sita2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) 
on [Unsplash](https://unsplash.com/photos/a-dog-and-a-cat-laying-in-the-grass-ouo1hbizWwo?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Krista Mangulsone](https://unsplash.com/@krista?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/white-dog-and-gray-cat-hugging-each-other-on-grass-9gz3wfHr65U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Alvan Nee](https://unsplash.com/@alvannee?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.
com/photos/two-brown-and-white-dogs-running-dirt-road-during-daytime-T-0EW-SEbsE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Noel Wangler](https://unsplash.com/@noelwangler?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-cat-with-green-eyes-4fSbPSfwEyw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Eric Ward](https://unsplash.com/@ericjamesward?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/photo-of-man-hugging-tan-dog-ISg37AI2A-s?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Jana Briede](https://unsplash.com/@jana_briede?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/white-and-brown-short-coated-dog-on-yellow-flower-field-during-daytime-0hKeD_OwgJ0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Radission US](https://unsplash.com/@radission?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.
com/photos/two-people-shaking-hands-in-front-of-a-laptop-_XeQ8XEWb4Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Photo by [Jahanzeb Ahsan](https://unsplash.com/@jahan_photobox?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/rows-of-lit-candles-in-a-dark-room-S7AAHM10FjA?
utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
