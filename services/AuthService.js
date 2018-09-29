import { BaseService } from './BaseService'

export class AuthService extends BaseService {
    static login(username, password) {
        return this.post('/login', {
            username,
            password
        })
    }

    static register(username, password) {
        return this.post('/register', {
            username,
            password
        })
    }
}
