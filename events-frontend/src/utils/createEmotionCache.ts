/**
 * Shared Emotion cache factory.
 *
 * Both the SSR pass (_document.tsx) and the client (_app.tsx) create their cache
 * from this single factory so they agree on one explicit key ("css"). Relying on
 * AppCacheProvider's implicit default cache (key "mui") produced hydration
 * mismatches under Next 16 + Turbopack + @mui/material-nextjs, so we force one
 * shared configuration instead.
 */

import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css" });
}
