import { BaseService } from './BaseService'

export class SymptomsService extends BaseService {
    static getSymptomsList() {
        return this.get('/symptomslist')
    }

    static checkSymptoms(symptoms) {
        return this.post('/checksymptoms', {
            symptoms
        })
    }
}
