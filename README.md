# Self Education. 
##### Board Like Trello.
###### Stack:

- React
- Redux
- TypeScript
- etc. 

## Setting up enviromenment

- `cp .env.example .env` - *build a local config and edit if it's necessary*
- `docker exec -it react-self-web-server bash` - *enter into a docker container*

## Development

- `docker-compose build` - *build a docker container*
- `docker-compose up -d` - *run a docker container (default port: 3001)*
- `yarn install` - *install modules*
- `yarn add {module_name} {--dev}` - *adding a new module*
- `yarn start` - *run an application in development mode (default port: 3001)*

## Testing

- `yarn test:lint:es` - *run eslint tests*
- `yarn test:lint:style` - *run styletint tests*
- `yarn test:unit` - *run unit tests*
- `yarn test` - *run all tests*
