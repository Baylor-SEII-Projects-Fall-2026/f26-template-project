FROM node:24 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Create a build of the project
FROM base AS build
WORKDIR /build
COPY . .

RUN pnpm install
RUN pnpm run build

# Copy the build artifacts
FROM base
WORKDIR /app
COPY --from=build /build .

# Run the app
ENTRYPOINT exec pnpm start