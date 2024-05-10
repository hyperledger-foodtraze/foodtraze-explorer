 # Foodtraze Explorer

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/hyperledger-labs/blockchain-explorer?sort=semver)](https://github.com/hyperledger-foodtraze/foodtraze-explorer/releases)
![node-current](https://img.shields.io/badge/node-v12.13.1-blue)

Explorer is a simple, powerful, easy-to-use, well-maintained, open-source utility to browse activity on the underlying blockchain network. Users can configure and build Hyperledger Explorer on macOS and Ubuntu.

# Quick start (using codebase)

## Prerequisites

* Nodejs 
* PostgreSQL 
* Linux-based operating system, such as Ubuntu or MacOS
* golang (optional)


## Start Hyperledger Fabric network

This guide assumes that you've already started the test network by following [Foodtraze Network setup](https://github.com/hyperledger-foodtraze/foodtraze-network.git).

## Step 1 : Clone GIT Repository

Clone this repository to get the latest using the following command.

```shell
$ git clone -b predev https://github.com/hyperledger-foodtraze/foodtraze-explorer.git
$ cd foodtraze-explorer
```

## Step 2 :  Database Setup

```
$ cd foodtraze-explorer/app
```

* Modify `app/explorerconfig.json` to update PostgreSQL database settings.

    ```json
    "postgreSQL": {
        "host": "127.0.0.1",
        "port": "5432", 
        "database": "your_database_name",
        "username": "your_database_user",
        "passwd": "your_database_password"
    }
    ```

  

## Step 3 : Update configuration



* Modify connection profile in the JSON file `app/platform/fabric/connection-profile/test-network.json`:
  * Change `fabric-path` to your fabric network disk path in the test-network.json file:
  * Provide the full disk path to the adminPrivateKey config option. It usually ends with `_sk`, for example:
    `/fabric-path/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore/priv_sk`
  * `exploreradmin` and `exploreradminpw` is the credential for the user of Explorer to log in to the dashboard
  * `enableAuthentication` is a flag to enable authentication using a login page. Setting to false will skip authentication.




## Step 4 : Build Hyperledger Explorer


```
$ cd foodtraze-explorer
$ npm install
$ cd client/
$ npm install
$ npm run build
```

## Step 5 : Run Hyperledger Explorer

Run the below command inside the directory

```
 ./start.sh
```
By following the steps outlined in this article, you have successfully set up Foodtraze explorer on your system. 


# License

