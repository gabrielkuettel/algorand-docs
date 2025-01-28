---
editUrl: false
next: false
prev: false
title: "performAtomicTransactionComposerSimulate"
---

> **performAtomicTransactionComposerSimulate**(`atc`, `algod`, `options`?): `Promise`\<`SimulateResponse`\>

Performs a simulation of the transactions loaded into the given AtomicTransactionComposer.
Uses empty transaction signers for all transactions.

## Parameters

### atc

`AtomicTransactionComposer`

The AtomicTransactionComposer with transaction(s) loaded.

### algod

`AlgodClient`

An Algod client to perform the simulation.

### options?

`Omit`\<`object`, `"txnGroups"`\>

## Returns

`Promise`\<`SimulateResponse`\>

The simulation result, which includes various details about how the transactions would be processed.

## Defined in

[src/transaction/perform-atomic-transaction-composer-simulate.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/perform-atomic-transaction-composer-simulate.ts#L14)
