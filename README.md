# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

#### Create Postgres Database

```terminal
createdb native-types-test
```

Set `DATABASE_URL` in env to connection string.

```
DATABASE_URL=postgresql://<USER>@127.0.0.1/native-types-test
```

Migrate and Seed

```
yarn rw prisma migrate dev
yarn rw prisma db seed
```

To reset and reseed in development:

```
yarn rw prisma migrate reset
```

### Database Schema with Native Types

```
datasource DS {
  // optionally set multiple providers
  // example: provider = ["sqlite", "postgresql"]
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  binaryTargets   = "native"
  previewFeatures = ["nativeTypes", "createMany"]
}

model Post {
  id      Int    @id @default(autoincrement())
  title   String @unique
  lede    String @DS.VarChar(200)
  tagline String @DS.Char(10)
  content String @DS.Text
  xml     String @DS.Xml
}
```

Note: `createMany` is used for seeding. Use `DS` to specify [native types](https://www.prisma.io/docs/concepts/components/preview-features/native-types/native-types-mappings/).

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
