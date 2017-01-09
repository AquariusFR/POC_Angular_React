export class POCAngularReactPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poc-angular-react-app h1')).getText();
  }
}
