install:
	npm ci

gendiff:
	node ./bin/gendiff.js

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npx jest

test-watch:
	npm run test -- --watch

test-coverage:
	npx jest --coverage