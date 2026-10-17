import { defineConfig, globalIgnores } from 'eslint/config';
import stellar-raide-tariff-shield from 'eslint-config-stellar-raide-tariff-shield';

export default defineConfig([
  globalIgnores(['**/dist/', '**/.next/', '**/playwright-report/']),
  stellar-raide-tariff-shield,
]);
