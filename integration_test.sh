#!/bin/bash
BASE_DIR=./integration/node_modules
yarn clean
yarn build
mkdir -p $BASE_DIR
mkdir -p ${BASE_DIR}/@sinqia
mkdir -p ${BASE_DIR}/@sinqia/ng-select
cp -R ./dist ${BASE_DIR}/@sinqia/ng-select
cd ./integration
yarn install
yarn build
yarn e2e
