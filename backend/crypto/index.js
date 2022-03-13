const supermongo = require("@forbidden_duck/super-mongo");
const cryptojs = require("crypto-js");

module.exports.options = {
    cfg: {
        keySize: 512 / 32,
        iterations: 10000,
        mode: cryptojs.mode.OFB,
    },
    jwtkey: process.env.JWTKEY || "1234567890qwertyuiopasdfghjklzxcvbnm",
};

module.exports.base64 = supermongo.Utils.Base64;

module.exports.hash = {
    /**
     * Create a new Salt+Hash
     * @param {string} str
     * @returns {string}
     */
    create: (str) => {
        const strToBase = supermongo.Utils.Base64.encode(str);
        return supermongo.Utils.Hash.create(strToBase, this.options.cfg);
    },
    /**
     * Compare a Salt+Hash
     * @param {string} str
     * @param {string} salthash
     * @returns {boolean}
     */
    compare: (str, salthash) => {
        const strToBase = supermongo.Utils.Base64.encode(str);
        return supermongo.Utils.Hash.compare(
            strToBase,
            salthash,
            this.options.cfg
        );
    },
};

module.exports.refreshtoken = {
    /**
     * Create a new SHA512 refresh token
     * @param {string} str
     * @returns {string}
     */
    create: (str) => {
        const strToBase = supermongo.Utils.Base64.encode(str);
        return supermongo.Utils.Token.create("SHA512", strToBase);
    },
};

module.exports.data = {
    /**
     * Encrypt data
     * @param {string} key
     * @param {string} str
     * @returns {string}
     */
    encrypt: (key, str) => {
        const strToBase = supermongo.Utils.Base64.encode(str);
        return cryptojs.AES.encrypt(
            strToBase,
            key,
            this.options.cfg
        ).toString();
    },
    /**
     * Decrypt a cipher
     * @param {string} key
     * @param {string} encryption
     * @returns {string}
     */
    decrypt: (key, encryption) => {
        const str = cryptojs.AES.decrypt(
            encryption,
            key,
            this.options.cfg
        ).toString();
        return supermongo.Utils.Base64.decode(str);
    },
};
