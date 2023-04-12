import jwt from 'jsonwebtoken';

function generateToken(id = {}) {
    const secret = process.env.SECRET;
    console.log(secret, "secret")

    const token = jwt.sign(id, secret!, { expiresIn: '1h' });

    return token;
}

export default generateToken;