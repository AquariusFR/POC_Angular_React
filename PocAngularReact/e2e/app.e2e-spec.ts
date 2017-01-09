import { PocAngularReactPage } from './app.po';

describe('poc-angular-react App', function() {
  let page: PocAngularReactPage;

  beforeEach(() => {
    page = new PocAngularReactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
