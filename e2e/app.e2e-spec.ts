import { JsPomodoroAngular2Page } from './app.po';

describe('js-pomodoro-angular2 App', function() {
  let page: JsPomodoroAngular2Page;

  beforeEach(() => {
    page = new JsPomodoroAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
