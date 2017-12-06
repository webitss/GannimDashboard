/*
import {Injectable} from '@angular/core';
import {LiaProxy} from "./proxy";

@Injectable()
export class LiaService {

    packages: any;
    //ListShell<ProductAdditionalObj>
    constructor(private proxy: LiaProxy) {

    }
    getData:any;
    async post():Promise<any> {
        await this.proxy.post().then((res) => {
            this.getData=res;
            console.log(this.getData)
        }).catch(() => console.log("error"));
    }
}

*/
