import { NextFunction, Response, Request } from 'express';
import '../config/env';
import jwt from 'jsonwebtoken';

function auth( req: Request, res: Response, next: NextFunction) {

    const secret = process.env.SECRET;

    const authHeader = req.headers.authorization;
    
    if(!authHeader)
        return res.status(401).send({ message: 'token é necessário'});

    const [schema, token] = authHeader.split(' ');

    const decoded = jwt.verify(token, secret!)
    next();

    if(!decoded)
        return res.status(401).send({ messae: 'token inválido'});
}

export default auth;