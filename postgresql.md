# Docker

Se utilizará Docker para levantar una base de datos **PostgreSQL**. Docker facilita los recursos y eso permite centrarse en el trabajo principal como crear la base de datos, tablas, conectar back-ends con la base de datos, etc.

## TABLA DE CONTENIDO

- [Contenedor](#contenedor)
  - [Postgres](#postgres)
  - [Ip del contenedor](#ip-del-contenedor)
- [Credenciales](#credenciales)
- [Cadena de conexión](#cadena-de-conexión)

## Contenedor

### Postgres

Descargar la imagen desde Docker Hub

```shell
$ docker pull postgres
```

Crear volúmen

```shell
$ docker volume create postgres-data
```

Ver detalles del volúmen

```shell
$ docker volume inspect postgres-data
```

Crear el contenedor

```shell
$ docker run -d --name postgres-service -e POSTGRES_PASSWORD=pass123 -e PGDATA=/var/lib/postgresql/data/pgdata -v postgres-data:/var/lib/postgresql/data postgres
```

### IP del contenedor

La IP del contenedor se puede obtener con el siguiente comando

```shell
$ docker inspect -f "{{ .NetworkSettings.IPAddress }}" postgres-service
```

## Credenciales

Según la [documentación](https://hub.docker.com/_/postgres) de la imagen de Docker, el password es requerido para la creación del contenedor por lo que el parámetro `POSTGRES_PASSWORD` es enviado en el comando anterior, y el _superusuario_ predeterminado es **postgres** si no es modificado con el parámetro `POSTGRES_USER`.

```json
user: "postgres"
password: "pass123"
```

## Cadena de conexión

Ip obtenida en la [sección anterior](#ip-del-contenedor)

```
jdbc:postgresql://172.17.0.2:5432/postgres
```
