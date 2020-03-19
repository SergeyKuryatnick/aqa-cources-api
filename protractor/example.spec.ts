import {get, post, put} from 'request-promise';
import {browser} from "protractor";

const urlGetDeviceToken = 'https://www.freelancer.com/auth/device/';
const urlLogin = 'https://www.freelancer.com/ajax/auth/login.php';
const userLogin = 'anton.olkhovskyi@valor-software.com';
const userPass = 'bc?+c6QW@Cpv6u&';

describe('First spec', () => {
    beforeAll(async() =>{
        const deviceToken = await get({
            uri: urlGetDeviceToken,
            json: true,
        }).then(async(response) => {
            // browser.sleep(100);
            // console.log(await typeof response.body)
            // await post({
            //     uri: urlLogin,
            //     json: true,
            //     body: {
            //         user: userLogin,
            //         password: userPass,
            //         device_token: response
            //     }
            // })
            return response.result.token;
        });
        
        const consoles = await post({
            uri: urlLogin,
                json: true,
                form:{
                    user: userLogin,
                    password: userPass,
                    device_token: deviceToken
                }
            });
        console.log(consoles);

    });

    it('123', () => {
        expect(true).toBeTruthy()
    })
})
