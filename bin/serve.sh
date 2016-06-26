#!/bin/bash

VERSIONING_DIR=`pwd`
TIDDLYWIKI5_DIR=$VERSIONING_DIR/../TW5

export TIDDLYWIKI_PLUGIN_PATH=$VERSIONING_DIR/plugins
export TW_SERVE_EDITION_PATH=$VERSIONING_DIR/editions/versioning-server
( cd $TIDDLYWIKI5_DIR && ./bin/serve.sh )
