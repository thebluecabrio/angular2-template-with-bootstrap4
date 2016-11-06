import { TheBlueCabrioPage } from './app.po';

describe('the-blue-cabrio App', function() {
  let page: TheBlueCabrioPage;

  beforeEach(() => {
    page = new TheBlueCabrioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
