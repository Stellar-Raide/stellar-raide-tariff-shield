import { Keypair } from "@stellar/stellar-sdk";
import { stellar-raide-tariff-shieldClient } from "@stellar-raide-tariff-shield/sdk";
import { env } from "./env.js";
import { createRpcServer } from "./lib/soroban/rpcClient.js";

export const platformKeypair = Keypair.fromSecret(env.PLATFORM_STELLAR_SECRET);
export const suretyKeypair = Keypair.fromSecret(env.SURETY_STELLAR_SECRET);

const rpcServer = createRpcServer(env.STELLAR_RPC_URL);

export const contractClient = new stellar-raide-tariff-shieldClient({
  rpcUrl: env.STELLAR_RPC_URL,
  contractId: env.TARIFF_SHIELD_CONTRACT_ID,
  networkPassphrase: env.STELLAR_NETWORK_PASSPHRASE,
  server: rpcServer,
});

export const explorerTx = (hash: string): string =>
  `https://stellar.expert/explorer/${env.STELLAR_NETWORK}/tx/${hash}`;

export async function getCurrentLedgerSequence(): Promise<number> {
  const server = createRpcServer(env.STELLAR_RPC_URL);
  const latest = await server.getLatestLedger();
  return latest.sequence;
}
