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
New block from ZMOK-WS #12801720 -> WINNER
Waiting ...
Received block from INFURA #12801720, LAG time: 0.095 sec
Received block from ZMOK-FR-WS #12801720, LAG time: 0.129 sec
Received block from ZMOK #12801720, LAG time: 0.177 sec
Received block from ZMOK-FR #12801720, LAG time: 0.333 sec
Waiting ...
Received block from INFURA-WS #12801720, LAG time: 1.173 sec
Waiting ...
Received block from ALCHEMY-WS #12801720, LAG time: 2.123 sec
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
Waiting ...
------------------------------------------------------
New block from ZMOK-WS #12801721 -> WINNER
Received block from ZMOK-FR-WS #12801721, LAG time: 0.209 sec
Waiting ...
Received block from INFURA #12801721, LAG time: 0.752 sec
Received block from ZMOK #12801721, LAG time: 0.761 sec
Received block from ZMOK-FR #12801721, LAG time: 0.817 sec
Waiting ...
Received block from ALCHEMY-WS #12801721, LAG time: 2.282 sec
Received block from INFURA-WS #12801721, LAG time: 2.397 sec
Waiting ...
Waiting ...
Waiting ...
Waiting ...
------------------------------------------------------
New block from ZMOK-WS #12801722 -> WINNER
Waiting ...
Received block from INFURA #12801722, LAG time: 0.659 sec
Received block from ZMOK #12801722, LAG time: 0.66 sec
Received block from ZMOK-FR #12801722, LAG time: 0.702 sec
Received block from ZMOK-FR-WS #12801722, LAG time: 1.449 sec
Waiting ...
Received block from INFURA-WS #12801722, LAG time: 1.896 sec
Waiting ...
Received block from ALCHEMY-WS #12801722, LAG time: 2.76 sec
Waiting ...
Waiting ...
Waiting ...
```
