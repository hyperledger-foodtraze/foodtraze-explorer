/*
 *SPDX-License-Identifier: Apache-2.0
 */

import {helper} from '../../../common/helper';
// import * as bcrypt from 'bcrypt';

const logger = helper.getLogger('User');

/**
 *
 *
 * @class User
 */
export class User {
	
	userJson : any;
	user: any;
	// password :string;

	/**
	 * Creates an instance of User.
	 * @param {*} user
	 * @memberof User
	 */
	constructor(user) {
		// Put the user request in user object
		this.userJson = {};
		logger.debug(`User : ${user.user}`);
		Object.keys(user).forEach(key => {
			const value = user[key];
			this.userJson[key] = value;
		});
	}

	/**
	 *
	 * Create and return the User object by specifying minimum parameters
	 * @param {string} user
	 * @param {string} password
	 * @param {string} network
	 * @param {string} roles
	 * @returns {User} Newly defined User object
	 * @memberof User
	 */
	static createInstanceWithParam(user, password, network, roles) : any {
		return new User({
			user,
			password,
			network,
			roles
		});
	}

	// public static comparePassword(user: User, passwordCheck: string): Promise<boolean> {
    //     return new Promise((resolve, reject) => {
    //         bcrypt.compare(passwordCheck, user.password, (err, res) => {
    //             resolve(res === true);
    //         });
    //     });
    // }

	/**
	 *
	 *
	 * @returns
	 * @memberof User
	 */
	async asJson() {
		return this.userJson;
	}
}
