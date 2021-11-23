require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note range punch hunt process tail ghost'; 
let testAccounts = [
"0xda6eda624e6d9bba93e17c94995fd9c62bd8bba9b46fa56e3c1eb7eb2fa031bc",
"0x55a7469671a2094f8fa8feb774444d0e4daae72be2b5502debe1b448d56293ce",
"0xce27d8bacaa153f6740d437e62b0220a0ade86ea7c1325af449d13ab966859c8",
"0xea4c47faa5a1ad135deb6c739681afccab27cd50ff89b94084efaaae6190fdc3",
"0x93f72b983ae95983497c161c72a37a0ffcc560b69751aa05a1dcdf8b254f3334",
"0x9df2a545e1fecf4c650b17fccd117a3917964588159d7de31f21ffb9677c621b",
"0x634ef1d2fa68682a65747c8564792c231f08312525b18cb096899bfce32a033a",
"0x524c83d3a94146110b52debfc904d010585e2269f0642392010e446c6a08d97e",
"0xd8b8a9fbfccea302f98192d3da0e4fcec4bb783b6ea34eed7d827e3f8a270650",
"0x4227c898700fd82d02360e4c7da2d3200c8cfad4895140f7ca92a206b277d545"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

