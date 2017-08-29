import { AngularSrcPage } from './app.po';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display message regarding registration app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to the passenger registration app.');
  });
  it('click twice and reset with matched points'), () =>{
    page.navigateTo();

    expect(page.getPoints()).toBe('1');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  }
});
