import { SurankuDashboardPage } from './app.po';

describe('suranku-dashboard App', () => {
  let page: SurankuDashboardPage;

  beforeEach(() => {
    page = new SurankuDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
