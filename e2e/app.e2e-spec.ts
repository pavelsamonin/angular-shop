import { Angular4ShopPage } from './app.po';

describe('angular4-shop App', function() {
  let page: Angular4ShopPage;

  beforeEach(() => {
    page = new Angular4ShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
