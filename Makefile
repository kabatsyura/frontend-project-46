install:
	npm ci

gendiff:
	node ./bin/gendiff.js

eslint:
	npx eslint

eslint-fix:
	npx eslint-fix