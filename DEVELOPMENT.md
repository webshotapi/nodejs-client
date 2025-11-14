# Dev mode
If you want to run api-server client in development mode set env

```sh
export WEBSHOTAPI_ENDPOINT=dev
```
Then client will connect with localhost:3000. With this host you can mock original server.

# Internal test api key for dev environment
```sh
export WEBSHOTAPI_KEY=d609cd1c96102bed02739b328ff35eb9
```

# Tests
```sh
export WEBSHOTAPI_ENDPOINT=https://api.webshotapi.com/v1
export WEBSHOTAPI_KEY=d609cd1c96102bed02739b328ff35eb9 # This is example api key ;)
npm run test
```

# Release
```sh
bin/release.sh
```