import config from 'config'
export class BaseController {

    
}
export function prefixRoute(path: string): string {
    return config.get<string>('express.apiRoot') + path;
}