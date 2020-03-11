import { Injectable } from '@angular/core';
import { TranslateService } from '../../generic/translate/translate.service';


@Injectable()
export class AlertService {

    constructor(
        private translate: TranslateService
    ) { }

    showAlertConfirm(alertMsg: any, cb) {
    }

    showAlertSuccess(alertMsg: any, title?: String, text?: String) {
    }

    showAlertCall(alertMsg: any, title: String, text: String, cb) {
    }

}
