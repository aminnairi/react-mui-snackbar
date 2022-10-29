# Contributing

## Requirements

- Git
- Docker
- Docker Compose

## Clone

```bash
git clone https://github.com/aminnairi/react-mui-snackbar.git
cd react-mui-snackbar
```

## Docker Compose Startup

```bash
docker compose up --detach
```

## Build

```bash
docker compose exec node npm run build
```

## Docker Compose Shutdown

```bash
docker compose down --remove-orphans --volumes --timeout 0
```