FROM openjdk:11

WORKDIR /app

COPY HelloWorld.java .
RUN javac HelloWorld.java

# Specify the command to run on container startup
CMD ["java", "HelloWorld"]