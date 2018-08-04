import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


    public sctollToE (selector) {
        const el = document.getElementById(selector);

        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
