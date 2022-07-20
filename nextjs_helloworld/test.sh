#!/usr/bin/env bash

set -ex


okteto destroy -f -d -v
okteto deploy --build
# okteto up
