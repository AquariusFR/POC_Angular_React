import { POCAngularReactPage } from './app.po';

describe('poc-angular-react App', function() {
  let page: POCAngularReactPage;

  beforeEach(() => {
    page = new POCAngularReactPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poc-angular-react works!');
  });
});
