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

