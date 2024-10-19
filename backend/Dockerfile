FROM openjdk:17 AS base

RUN mkdir -p /opt/user/backend
WORKDIR /opt/user/backend
COPY libs/fastcgi-lib.jar ./libs/fastcgi-lib.jar
COPY src  ./src

FROM gradle:jdk17 AS build
WORKDIR /opt/user/backend
COPY --from=base  /opt/user/backend/libs/  /opt/user/backend/libs/
COPY --from=base  /opt/user/backend/src/  /opt/user/backend/src/
COPY settings.gradle ./
COPY build.gradle ./

RUN gradle clean build --no-daemon

FROM openjdk:17 AS final

WORKDIR /opt/user/backend

COPY --from=build /opt/user/backend/build/libs/*.jar  ./backend.jar

EXPOSE 5695

CMD ["java", "-DFCGI_PORT=5695", "-jar", "backend.jar"]
