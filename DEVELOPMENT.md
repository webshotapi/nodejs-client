# Dev mode
If you want to run api-server client in development mode set env

```sh
export WEBSHOTAPI_ENDPOINT=dev
```
Then client will connect with localhost:3000. With this host you can mock original server.

# Internal test api key for dev environment
```sh
export WEBSHOTAPI_API_KEY=7815696ecbf1c96e6894b779456d330e7815696ecbf1c96e6894b779456d330d
```

# Tests
```sh
export WEBSHOTAPI_ENDPOINT=https://api.webshotapi.com/v1
export WEBSHOTAPI_API_KEY=0909d85adda21539ecec77d9da67c7d40ac5bb6a652fa240cdc1acc6e411139e # This is example api key ;)
npm run test
```

# Release
```sh
bin/release.sh
```