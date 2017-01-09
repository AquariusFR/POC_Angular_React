import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { POCAngularReactAppComponent } from '../app/poc-angular-react.component';

beforeEachProviders(() => [POCAngularReactAppComponent]);

describe('App: POCAngularReact', () => {
  it('should create the app',
      inject([POCAngularReactAppComponent], (app: POCAngularReactAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poc-angular-react works!\'',
      inject([POCAngularReactAppComponent], (app: POCAngularReactAppComponent) => {
    expect(app.title).toEqual('poc-angular-react works!');
  }));
});
