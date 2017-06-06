import {Injectable} from "@angular/core";
/**
 * Created by kalaisr on 01-06-2017.
 */
@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:5000/';
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
