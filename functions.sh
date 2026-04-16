#!/bin/bash
#

install() {
	sudo apt install $package1
}


read -p "what do you want to install: " package1

echo "installing $package1"

install

echo "installation of $package1 has been completed"


