const crypto = require('crypto');

class HashService{
    hashOtp(data){
                           //hashing algo, secret key                                   convert to string from buffer    
        return crypto.createHmac('sha256', process.env.HASH_SECRET).update(data).digest('hex');
    }
}

module.exports = new HashService();