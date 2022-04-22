// https://eth-ropsten.alchemyapi.io/v2/m_ZfEJR4QLE-tPaYb6sHu1l-ZhvDKWFT

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/m_ZfEJR4QLE-tPaYb6sHu1l-ZhvDKWFT",
      accounts: [
        "4a68fc5a2dbe47d45642b1de0a6e46ccb1fcc739a991a96ff4130641ba10a012",
      ],
    },
  },
};
