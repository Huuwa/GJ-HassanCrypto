require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/e1984ca3bacb4f3ea7eec7c1e0d31e2d',
      accounts: ['21840f5ff5ded36ea2d225ce1a42e1a11d60f8cf2f736e409c1ffd793c17d328'],
    },
  },
};