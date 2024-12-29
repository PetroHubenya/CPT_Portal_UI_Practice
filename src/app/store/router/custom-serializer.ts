import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface IRouterStateUrl {
  url: string,
  params: Params,
  queryParams: Params
}

export class CustomSerializer implements RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    let urlWithoutQueryParams = url.split('?')[0];

    if (Object.keys(params).length > 0) {
      const urlParts = url.split('/');
      const paramValue = params['id'];

      if (urlParts[urlParts.length - 1] === paramValue) {
        urlParts.pop();
      }

      urlWithoutQueryParams = urlParts.join('/');
    }

    return { url: urlWithoutQueryParams, params, queryParams };
  }
}
