const APP_BASE = '';

class Route<T> {
  public base: string;
  public children: T;

  constructor(base: string, children: T) {
    this.base = base;
    this.children = children;
  }

  private linkFactory = (key?: keyof T, routeParamValue = '') => {
    if (key) {
      const routeParams = String(this.children[key]).match(/:[A-Za-z]+/g);

      return `${this.children[key]}`
        .replace(/\//g, '')
        .replace(routeParams ? routeParams[0] : ':id', `${routeParamValue}/`);
    }
  };

  public getLink = (key?: keyof T, id = '') => {
    let link = '';
    const baseUrl = this.base.replace(/\//g, '');

    if (APP_BASE) {
      link += `/${APP_BASE}`;
    }

    if (baseUrl) {
      link += `/${baseUrl}`;
    }

    link += `/${this.linkFactory(key, id)}`;

    return link;
  };
}

const ROUTES = {
  app: new Route('/', {}),
} as const;

export { ROUTES };
