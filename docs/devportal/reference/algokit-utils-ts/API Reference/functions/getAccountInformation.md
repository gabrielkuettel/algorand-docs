---
editUrl: false
next: false
prev: false
title: "getAccountInformation"
---

> **getAccountInformation**(`sender`, `algod`): `Promise`\<[`AccountInformation`](/reference/algokit-utils-ts/API Reference/type-aliases/accountinformation/)\>

:::caution[Deprecated]
Use `algorand.account.getInformation(sender)` or `new AccountManager(clientManager).getInformation(sender)` instead.

Returns the given sender account's current status, balance and spendable amounts.
:::

## Parameters

### sender

The address of the sender/account to look up

`string` | `SendTransactionFrom`

### algod

`AlgodClient`

The algod instance

## Returns

`Promise`\<[`AccountInformation`](/reference/algokit-utils-ts/API Reference/type-aliases/accountinformation/)\>

The account information

## Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const accountInfo = await account.getInformation(address, algod);
```

[Response data schema details](https://developer.algorand.org/docs/rest-apis/algod/#get-v2accountsaddress)

## Defined in

[src/account/account.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/account.ts#L156)
