import {Inject, Injectable} from "@angular/core";
/**
 * Created by kalaisr on 14-05-2017.
 */

export class LoginService{
    isAuthorized(id : String, password : String):boolean
    {
        console.log("id"+id+"password"+password);
        return true;
}
}