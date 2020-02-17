import {get, post, put} from 'request-promise';
import {browser} from "protractor";

const urlGetDeviceToken = 'https://www.freelancer.com/auth/device/';
const urlLogin = 'https://www.freelancer.com/ajax/auth/login.php';
const userLogin = 'anton.olkhovskyi@valor-software.com';
const userPass = 'bc?+c6QW@Cpv6u&';

describe('First spec', () => {
    let ahaha: {body:{}};
    beforeAll(async() =>{
        await get({
            uri: urlGetDeviceToken,
            json: true,
        }).then(async(response: Response) => {
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
            ahaha = response;
            return ;
        })

        await post({
            uri: urlLogin,
                json: true,
                body: {
                    user: userLogin,
                    password: userPass,
                    device_token: ahaha
                }
            })
        console.log(ahaha.body)
    });

    it('123', () => {
        expect(true).toBeTruthy()
    })
})