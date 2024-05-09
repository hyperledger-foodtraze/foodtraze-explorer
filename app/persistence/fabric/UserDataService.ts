/**
 *    SPDX-License-Identifier: Apache-2.0
 */
import { PgService } from '../postgreSQL/PgService';

/**
 *
 *
 * @class UserDataService
 */
export class UserDataService {
	sql: PgService;
	userModel: any;
	/**
	 * Creates an instance of UserDataService.
	 * @param {*} sql
	 * @memberof UserDataService
	 */
	constructor(sql: PgService) {
		this.sql = sql;
	}

	/**
	 *
	 *
	 * @param {*} attributes
	 * @param {*} options
	 * @memberof UserDataService
	 */
	async initialize(attributes: any, options: any) {
		this.userModel = this.sql.getUserModel(attributes, options);
	}

	/**
	 *
	 *
	 * @param {string} username
	 * @param {string} networkName
	 * @returns {*} User model
	 * @memberof UserDataService
	 */
	findUser(username: any, networkName: any) {
		return this.userModel.findOne({
			where: {
				user_name: username,
				network_name: networkName
			}
		});
	}

	/**
	 *
	 *
	 * @param {User} newUserObj
	 * @returns {Promise} Promise of User model
	 * @memberof UserDataService
	 */
	registerUser(newUserObj: any) {
		return this.userModel.create(newUserObj);
	}

	/**
	 *
	 *
	 * @param {User} username
	 * @param {User} networkName
	 * @returns {Promise} Promise of the number of destroyed users
	 * @memberof UserDataService
	 */
	unregisterUser(username: any, networkName: any) {
		const unregisterUser = {
			where: {
				user_name: username,
				network_name: networkName
			}
		};

		return this.userModel.destroy(unregisterUser);
	}

	/**
	 *
	 *
	 * @param {User} networkName
	 * @returns {Promise} Promise of the list of users belonging to specified network
	 * @memberof UserDataService
	 */
	getUserlist(networkName: any) {
		return this.userModel
			.findAll({
				where: {
					network_name:networkName
				}
			})
			.then((users: any[]) => {
				return users.map((user: { username: any; email: any; networkName: any; firstName: any; lastName: any; roles: any; }) => ({
					user_name: user.username,
					email: user.email,
					network_name: user.networkName,
					firstName: user.firstName,
					lastName: user.lastName,
					roles: user.roles
				}));
			});
	}
}
