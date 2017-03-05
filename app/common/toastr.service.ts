import { Injectable } from '@angular/core'
import * as toastru from 'toastr'

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastru.success(message, title);
    }
    info(message: string, title?: string) {
        toastru.info(message, title);
    }
    warning(message: string, title?: string) {
        toastru.warning(message, title);
    }
    error(message: string, title?: string) {
        toastru.error(message, title);
    }
}