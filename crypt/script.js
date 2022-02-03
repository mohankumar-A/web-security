const crypt = require("bcrypt-nodejs");

const password = "soup";
const hash = "$2a$10$uA.6/PJt0qjRghLtV//leObr0.oqSK5kWTkBb/YQUVD2zMb0fsDi2";

crypt.hash(password, null, null, (err, hash) => {
    console.log(hash);
})

crypt.compare(password, hash, (err, res) => {
    console.log(res);
})