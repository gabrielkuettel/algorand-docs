---
editUrl: false
next: false
prev: false
title: "getAppClient"
---

> **getAppClient**(`appDetails`, `algod`): `ApplicationClient`

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance
:::

## Parameters

### appDetails

`AppSpecAppDetails`

The details of the app

### algod

`AlgodClient`

An algod instance

## Returns

`ApplicationClient`

The application client

## Examples

```ts
Resolve by creator and name
const client = algokit.getAppClient(
    {
      resolveBy: 'creatorAndName',
      app: {appSpec},
      sender: {account},
      creatorAddress: {creator},
      findExistingUsing: indexerClient,
    },
    algodClient,
  )
```

```ts
Resolve by id:
const client = algokit.getAppClient(
    {
      resolveBy: 'id',
      app: {appSpec},
      sender: {account},
      id: {id},
    },
   algodClient,
)
```

## Defined in

[src/app-client.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app-client.ts#L40)
