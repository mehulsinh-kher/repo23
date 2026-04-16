#!/bin/bash


echo "installing $1"

sudo apt install $1

echo " argument 1= $1"

echo " total arguments $#"
echo "all args $@"
