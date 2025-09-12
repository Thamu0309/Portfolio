# Step 1: Use OpenJDK 21
FROM eclipse-temurin:21-jdk-jammy

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy Maven wrapper and pom.xml
COPY portfolio-backend/mvnw .
COPY portfolio-backend/.mvn .mvn
COPY portfolio-backend/pom.xml .

# Step 4: Make Maven wrapper executable
RUN chmod +x mvnw

# Step 5: Download dependencies
RUN ./mvnw dependency:go-offline

# Step 6: Copy source code
COPY portfolio-backend/src ./src

# Step 7: Build the JAR
RUN ./mvnw clean package -DskipTests

# Step 8: Expose port
EXPOSE 8080

# Step 9: Run the JAR (replace with your actual JAR name)
CMD ["java", "-jar", "target/portfolio-backend-0.0.1-SNAPSHOT.jar"]
