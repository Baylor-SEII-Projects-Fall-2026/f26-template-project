# Create a build of the project
FROM gradle:9.7.1-jdk25 AS build
WORKDIR /build
COPY . .

RUN ./gradlew build --no-daemon -p .

# Copy the build artifacts
FROM eclipse-temurin:25
WORKDIR /app
COPY --from=build /build/build/libs/events-api-1.0.0-SNAPSHOT.jar app.jar

# Run the app
ENTRYPOINT exec java $JAVA_OPTS -jar app.jar