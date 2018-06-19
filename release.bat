cd ./src
node ../node_modules/standard-version/bin/cli.js --infile ../CHANGELOG.md
cd ..

yarn run build

cd ./dist
npm publish --access public
