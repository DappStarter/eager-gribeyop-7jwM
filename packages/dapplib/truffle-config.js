require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool rice pitch erosion just knee army gas'; 
let testAccounts = [
"0x389a10a4d3b2309bef5f1ecc1131ef5b828a5437d55199e9e4471041d2cffa6b",
"0xba7d887d777debfee44a4060ce57b94f663e616321af0edd961e547521a4613c",
"0xbe743c86fb18d5bdef05f243b8dda39798d304cb6363f623075e799611eb3ea7",
"0xfbd6135e2351f13dbcf69dabc612d5130f7aa42934db3f4a93d1014c9a4d7796",
"0xdad6592d9654e08175a248462e93b5e0934f82a05b222922ed18b2fb0a4776ea",
"0x036be0904531f66c927bd9ca1ef71b708c710388b7c524800502e5894b1d795e",
"0x153bbf002cf4e4215314fd19faede6a350fe85e5c7adf8e77a71f46e2d2a7a10",
"0x612b4b85ddfd83077ecc893a8c9280b9f5548d0020b76b08c5d6595c20a50c67",
"0xd282f5b9630f5d825b20a65dcfbb1f245a53af9325550f72e3e9118de7e44b34",
"0x963e8dcaed74c6cdee545bdc615c6667909e259710865708abadab604651d229"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


