# syntax=docker/dockerfile:1
FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

# Install dependencies first so this layer is reused until the lockfile changes
FROM base AS build
WORKDIR /build
COPY package.json pnpm-lock.yaml ./
RUN corepack install
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

# Create a build of the project
COPY . .
RUN --mount=type=cache,id=next-cache,target=/build/.next/cache \
    pnpm run build

# Copy only the standalone server and static assets (see `output` in next.config.ts)
FROM node:24-slim
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
COPY --from=build /build/public ./public
COPY --from=build /build/.next/standalone ./
COPY --from=build /build/.next/static ./.next/static

# Run the app
EXPOSE 3000
CMD ["node", "server.js"]
