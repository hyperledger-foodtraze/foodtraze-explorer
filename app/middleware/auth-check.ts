/*
 * SPDX-License-Identifier: Apache-2.0
 */

import * as jwt from 'jsonwebtoken';
import config from '../explorerconfig.json';

/**
 *  The Auth Checker middleware function.
 */
export const authCheckMiddleware = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).end();
	}

	// Get the last part from a authorization header string like "bearer token-value"
	const token = req.headers.authorization.split(' ')[1];
	console.log('token', token);
	// Decode the token using a secret key-phrase
	return jwt.verify(token, '123##$$)(***&', (err, decoded) => {
		console.log('Decode', decoded);
		// The 401 code is for unauthorized status
		if (err) {
			return res.status(401).end();
		}
		console.log('Decode1', decoded);
		const requestUserId = decoded.user;

		req.requestUserId = requestUserId;
		req.network = decoded.network;

		// TODO: check if a user exists, otherwise error

		return next();
	});
};
