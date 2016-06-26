#!/bin/bash

VERSIONING_DIR=`pwd`
TIDDLYWIKI5_DIR=$VERSIONING_DIR/../TW5

OUTPUT_DIR=$VERSIONING_DIR/output
OUTPUT_FILE=ipfs-empty.html
mkdir -p $OUTPUT_DIR

export TIDDLYWIKI_PLUGIN_PATH=$VERSIONING_DIR/plugins

( cd $TIDDLYWIKI5_DIR && node ./tiddlywiki.js \
  $VERSIONING_DIR/editions/versioning \
  --verbose \
  --output $OUTPUT_DIR \
  --rendertiddler $:/core/save/all $OUTPUT_FILE text/plain )

echo Write $OUTPUT_DIR/$OUTPUT_FILE
