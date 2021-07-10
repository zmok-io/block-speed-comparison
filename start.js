var dotenv = require("dotenv").config({ path: ".env" })

var log = require('console-log-level')({ level: "info" })
var async = require("async");

var Web3 = require('web3');
var Web3HttpProvider = require('web3-providers-http');
var Web3WsProvider = require('web3-providers-ws');
const JsonRpc = require("node-jsonrpc-client");

var wsOptions = {
  timeout: 300000, // ms

  clientConfig: {
    // Useful to keep a connection alive
    keepalive: true,
    keepaliveInterval: 60000 // ms
  },

  // Enable auto reconnection
  reconnect: {
      auto: true,
      delay: 5000, // ms
      maxAttempts: 9999,
      onTimeout: false
  }
};

var current0 = 0;
var currentTimestamp0 = undefined;

var currents = [];

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function compareBlocks(refName, refCurrent, refCurrentTimestamp) {
  let first = (refCurrent > current0)
  if (first) {
    log.info("------------------------------------------------------");
    current0 = refCurrent
    currentTimestamp0 = refCurrentTimestamp
  }

  var lag = 0;
  if (refCurrent != 0 && (current0 - refCurrent) > -999) {
    lag = (current0 - refCurrent);
  }

  let lagTime = (current0 == refCurrent ? (refCurrentTimestamp - currentTimestamp0) / 1000 : undefined)
  log.info("" + (first ? "New" : "Received") + " block from " + refName + " #" + refCurrent +
    (lag != 0 ? ", LAG: " + lag: "") + (lagTime ? ", LAG time: " + lagTime + " sec " : "") + (first ? " -> WINNER": ""));
}


const start = async () => {

  // Websocket providers
  // TODO: feel free to comment some of them
  [{"name": "ZMOK-FR-WS", "url": process.env.ZMOK_FR_WS_PROVIDER_URL},
  {"name": "ZMOK-WS", "url": process.env.ZMOK_WS_PROVIDER_URL},
  {"name": "INFURA-WS", "url": process.env.INFURA_WS_PROVIDER_URL},
  {"name": "ALCHEMY-WS", "url": process.env.ALCHEMY_WS_PROVIDER_URL},
    // {"name": "QUICKNODE", "url": "TODO"}
  ].forEach(async (k, i) => {
    let wsProvider = new Web3WsProvider(k.url, wsOptions);
    const wsWeb3 = new Web3(wsProvider);
    wsWeb3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error) {
        log.error(error);
        throw error;
      }
      log.debug('WS connected, waiting to new block...');
    }).on('data', (event) => {
      let wsCurrent = event.number;
      if (currents[k.name] == undefined || wsCurrent > currents[k.name]) {
        currents[k.name] = wsCurrent;
        compareBlocks(k.name, wsCurrent, Date.now())
      }
    });
  });

  // JSON RPC providers
  while (true) {
    [{"name": "ZMOK-FR", "url": process.env.ZMOK_FR_PROWIDER_URL},
    {"name": "ZMOK", "url": process.env.ZMOK_PROWIDER_URL},
    {"name": "INFURA", "url": process.env.INFURA_PROVIDER_URL},
    // {"name": "QUICKNODE", "url": "TODO"}
    ].forEach(async (k, i) => {
      const client = new JsonRpc(k.url);
      client.call("eth_blockNumber", []).catch((error) => {
        log.error(error);
      }).then((callResult) => {

        if (callResult) {
          var current = parseInt(callResult.result, 16);
          if (currents[k.name] == undefined || current > currents[k.name]) {
            currents[k.name] = current;
            // let nameSuffix = (i == 0 ? "" : " FRONT-RUNNING");
            compareBlocks(k.name, current, Date.now())
          }
        }
      });
    });

    log.info("Waiting ...");
    await sleep(1000);
  }
}

start();

module.exports = {}
