# Order Service Dockerfile
FROM openjdk:11-jdk-slim

WORKDIR /app

# Copy the Maven Wrapper and POM file
COPY mvnw .         
COPY mvnw.cmd .    

# Copy the src directory
COPY src ./src

# Make mvnw executable
RUN chmod +x mvnw    # Add this line to give execute permission

# Install Maven if necessary (not included in slim images)
RUN apt-get update && apt-get install -y maven

# Build the application
RUN ./mvnw package

CMD ["java", "-jar", "target/order-service-0.0.1-SNAPSHOT.jar"]
