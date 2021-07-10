# Get new block - ETH benchmark
Simple benchmark of different API endpoints on how fast they get a new block.

# Installing dependencies

Execute command:

```shell
npm install
```

# Setting up the environment

To run this project, make sure you have set correct API keys for endoints in your .env file. Execute the following command:

```shell
cat <<EOT >> .env
ZMOK_FR_WS_PROVIDER_URL=wss://api.zmok.io/fr/<ZMOK_APP_ID>
ZMOK_WS_PROVIDER_URL=wss://api.zmok.io/mainnet/<ZMOK_APP_ID>
INFURA_WS_PROVIDER_URL=wss://mainnet.infura.io/ws/v3/<INFURA_API_KEY>
ALCHEMY_WS_PROVIDER_URL=wss://eth-mainnet.ws.alchemyapi.io/v2/ALCHEMY_API_KEY>
ZMOK_FR_PROWIDER_URL=https://api.zmok.io/fr/<ZMOK_APP_ID>
ZMOK_PROWIDER_URL=https://api.zmok.io/mainnet/<ZMOK_APP_ID>
INFURA_PROVIDER_URL=https://mainnet.infura.io/v3/<INFURA_API_KEY>
EOT
```

# Running the benchmark

To run bechmark, start following command:
```shell
npm start
```

Sample result:

```
$ npm start
> block-speed-coparison@1.0.0 start
> node start.js

Waiting ...
------------------------------------------------------
New block from ZMOK-WS #12801439 -> WINNER
Received block from ZMOK-FR-WS #12801439, LAG time: 0.15 sec
Waiting ...
Received block from ZMOK #12801439, LAG time: 0.665 sec
Received block from INFURA #12801439, LAG time: 0.668 sec
Received block from ZMOK-FR #12801439, LAG time: 0.672 sec
Received block from INFURA-WS #12801438, LAG: 1
Waiting ...
------------------------------------------------------
New block from ZMOK-WS #12801440 -> WINNER
Received block from ALCHEMY-WS #12801438, LAG: 2
Received block from ALCHEMY-WS #12801439, LAG: 1
Waiting ...
Received block from ZMOK #12801440, LAG time: 0.633 sec
Received block from INFURA #12801440, LAG time: 0.644 sec
Received block from ZMOK-FR #12801440, LAG time: 0.651 sec
Received block from ZMOK-FR-WS #12801440, LAG time: 1.008 sec
Waiting ...
Received block from ALCHEMY-WS #12801440, LAG time: 2.164 sec
Waiting ...
Waiting ...
Received block from INFURA-WS #12801439, LAG: 1
Received block from INFURA-WS #12801440, LAG time: 4.086 sec
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
------------------------------------------------------
New block from ZMOK-WS #12801441 -> WINNER
Received block from ZMOK-FR-WS #12801441, LAG time: 0.014 sec
Waiting ...
Received block from INFURA #12801441, LAG time: 0.592 sec
Received block from ZMOK #12801441, LAG time: 0.602 sec
Received block from ZMOK-FR #12801441, LAG time: 0.625 sec
```
