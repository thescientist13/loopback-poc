# loopback-poc

## Overview
This is an experimental POC for leveraging Loopback as a backend RESTful API on top of Node and using MySQL.

## Setup
### Vagrant
It is recommended to install and use [Vagrant] to develop with.  To do so, install Vagrant then run  in the
root of this project.

1. `vagrant up`
2. `vagrant ssh`
3. `cd vagrant`

You can know run all the Node / NPM and CLI commands on a Ubuntu 14.04 Linux VM.

### Manual
1. Install Node >=5.x
2. Install Strongloop `npm install -g strongloop`
3. Install dependencies `npm install`

## Running the POC
Run `node .`
