# Java base image
FROM openjdk:23-jdk-slim

# Setting the working directory
WORKDIR /usr/app

# Copy the JAR file
COPY target/task-0.0.1-SNAPSHOT-spring-boot.jar /usr/app/todo-backend.jar

# Expose port 8080 (the default port that Spring Boot uses)
EXPOSE 8080

# Define the command to run your application
CMD ["java", "-jar", "todo-backend.jar"]
