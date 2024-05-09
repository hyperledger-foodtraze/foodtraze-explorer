/**
 *    SPDX-License-Identifier: Apache-2.0
 */
import passport from 'passport';
import { helper } from '../common/helper';
import { responder } from './requestutils';

const logger = helper.getLogger('Auth');

/**
 *
 *
 * @param {*} router
 * @param {*} platform
 */
export async function fabricroutes(router: any, platform: any) {

    router.get('/welcome', async (req, res, next) => {
        return res.status(200).json({
            success: true,
            message: 'You have successfully Welcome!',
        })(req, res, next);
    })
}