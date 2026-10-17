import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import stellar-raide-tariff-shield from 'eslint-config-stellar-raide-tariff-shield';

export default defineConfig([
  globalIgnores(['playwright-report/']),
  stellar-raide-tariff-shield,
  nextVitals,
  {
    name: 'stellar-raide-tariff-shield/web/react-compiler',
    // React Compiler diagnostics added to react-hooks/recommended in eslint-plugin-react-hooks v7
    // (eslint-config-next 16). The app does not enable the compiler; rules-of-hooks and
    // exhaustive-deps stay enforced.
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
    },
  },
]);
