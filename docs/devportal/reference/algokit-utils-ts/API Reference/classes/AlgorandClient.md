---
editUrl: false
next: false
prev: false
title: "AlgorandClient"
---

A client that brokers easy access to Algorand functionality.

## Implements

- `AlgorandClientInterface`

## Accessors

### account

#### Get Signature

> **get** **account**(): `AccountManager`

Get or create accounts that can sign transactions.

##### Returns

`AccountManager`

#### Defined in

[src/types/algorand-client.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L141)

***

### app

#### Get Signature

> **get** **app**(): `AppManager`

Methods for interacting with apps.

##### Returns

`AppManager`

#### Implementation of

`AlgorandClientInterface.app`

#### Defined in

[src/types/algorand-client.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L151)

***

### appDeployer

#### Get Signature

> **get** **appDeployer**(): `AppDeployer`

Methods for deploying apps and managing app deployment metadata.

##### Returns

`AppDeployer`

#### Implementation of

`AlgorandClientInterface.appDeployer`

#### Defined in

[src/types/algorand-client.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L156)

***

### asset

#### Get Signature

> **get** **asset**(): `AssetManager`

Methods for interacting with assets.

##### Returns

`AssetManager`

#### Defined in

[src/types/algorand-client.ts:146](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L146)

***

### client

#### Get Signature

> **get** **client**(): `ClientManager`

Get clients, including algosdk clients and app clients.

##### Returns

`ClientManager`

#### Implementation of

`AlgorandClientInterface.client`

#### Defined in

[src/types/algorand-client.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L136)

***

### createTransaction

#### Get Signature

> **get** **createTransaction**(): `AlgorandClientTransactionCreator`

Methods for creating a transaction.

##### Returns

`AlgorandClientTransactionCreator`

#### Implementation of

`AlgorandClientInterface.createTransaction`

#### Defined in

[src/types/algorand-client.ts:181](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L181)

***

### send

#### Get Signature

> **get** **send**(): `AlgorandClientTransactionSender`

Methods for sending a transaction.

##### Returns

`AlgorandClientTransactionSender`

#### Implementation of

`AlgorandClientInterface.send`

#### Defined in

[src/types/algorand-client.ts:174](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L174)

## Methods

### getSuggestedParams()

> **getSuggestedParams**(): `Promise`\<`SuggestedParams`\>

Get suggested params for a transaction (either cached or from algod if the cache is stale or empty)

#### Returns

`Promise`\<`SuggestedParams`\>

#### Defined in

[src/types/algorand-client.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L120)

***

### newGroup()

> **newGroup**(): `TransactionComposer`

Start a new `TransactionComposer` transaction group

#### Returns

`TransactionComposer`

#### Implementation of

`AlgorandClientInterface.newGroup`

#### Defined in

[src/types/algorand-client.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L161)

***

### setDefaultSigner()

> **setDefaultSigner**(`signer`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Sets the default signer to use if no other signer is specified.

#### Parameters

##### signer

The signer to use, either a `TransactionSigner` or a `TransactionSignerAccount`

`TransactionSigner` | `TransactionSignerAccount`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Defined in

[src/types/algorand-client.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L59)

***

### setDefaultValidityWindow()

> **setDefaultValidityWindow**(`validityWindow`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Sets the default validity window for transactions.

#### Parameters

##### validityWindow

The number of rounds between the first and last valid rounds

`number` | `bigint`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Defined in

[src/types/algorand-client.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L49)

***

### setSigner()

> **setSigner**(`sender`, `signer`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Tracks the given signer against the given sender for later signing.

#### Parameters

##### sender

The sender address to use this signer for

`string` | `Address`

##### signer

`TransactionSigner`

The signer to sign transactions with for the given sender

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Defined in

[src/types/algorand-client.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L92)

***

### setSignerFromAccount()

> **setSignerFromAccount**(`account`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Tracks the given account (object that encapsulates an address and a signer) for later signing.

#### Parameters

##### account

The account to register, which can be a `TransactionSignerAccount` or
 a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount`

`MultisigAccount` | `Account` | `SigningAccount` | `TransactionSignerAccount` | `LogicSigAccount`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const accountManager = AlgorandClient.mainnet()
 .setSignerFromAccount(algosdk.generateAccount())
 .setSignerFromAccount(new algosdk.LogicSigAccount(program, args))
 .setSignerFromAccount(new SigningAccount(mnemonic, sender))
 .setSignerFromAccount(new MultisigAccount({version: 1, threshold: 1, addrs: ["ADDRESS1...", "ADDRESS2..."]}, [account1, account2]))
 .setSignerFromAccount({addr: "SENDERADDRESS", signer: transactionSigner})
```

#### Defined in

[src/types/algorand-client.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L79)

***

### setSuggestedParamsCache()

> **setSuggestedParamsCache**(`suggestedParams`, `until`?): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Sets a cache value to use for suggested transaction params.

#### Parameters

##### suggestedParams

`SuggestedParams`

The suggested params to use

##### until?

`Date`

A date until which to cache, or if not specified then the timeout is used

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Defined in

[src/types/algorand-client.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L103)

***

### setSuggestedParamsCacheTimeout()

> **setSuggestedParamsCacheTimeout**(`timeout`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Sets the timeout for caching suggested params.

#### Parameters

##### timeout

`number`

The timeout in milliseconds

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Defined in

[src/types/algorand-client.ts:114](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L114)

***

### defaultLocalNet()

> `static` **defaultLocalNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` pointing at default LocalNet ports and API token.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L191)

***

### fromClients()

> `static` **fromClients**(`clients`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` pointing to the given client(s).

#### Parameters

##### clients

`AlgoSdkClients`

The clients to use

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L228)

***

### fromConfig()

> `static` **fromConfig**(`config`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` from the given config.

#### Parameters

##### config

`AlgoConfig`

The config to use

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:258](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L258)

***

### fromEnvironment()

> `static` **fromEnvironment**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` loading the configuration from environment variables.

Retrieve configurations from environment variables when defined or get default LocalNet configuration if they aren't defined.

Expects to be called from a Node.js environment.

If `process.env.ALGOD_SERVER` is defined it will use that along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

If `process.env.INDEXER_SERVER` is defined it will use that along with optional `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If either aren't defined it will use the default LocalNet config.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L249)

***

### mainNet()

> `static` **mainNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` pointing at MainNet using AlgoNode.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L215)

***

### testNet()

> `static` **testNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Returns an `AlgorandClient` pointing at TestNet using AlgoNode.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient`

#### Defined in

[src/types/algorand-client.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/types/algorand-client.ts#L203)
