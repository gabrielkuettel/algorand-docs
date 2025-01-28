---
editUrl: false
next: false
prev: false
title: "getLocalNetDispenserAccount"
---

> **getLocalNetDispenserAccount**(`algod`, `kmd`?): `Promise`\<`Account`\>

:::caution[Deprecated]
Use `algorand.account.kmd.getLocalNetDispenserAccount()` instead.

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts)
:::

## Parameters

### algod

`AlgodClient`

An algod client

### kmd?

`KmdClient`

A KMD client, if not specified then a default KMD client will be loaded from environment variables

## Returns

`Promise`\<`Account`\>

## Defined in

[src/localnet/get-localnet-dispenser-account.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/localnet/get-localnet-dispenser-account.ts#L15)
