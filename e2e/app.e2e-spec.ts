import { Ng2SocketChatPage } from './app.po';

describe('ng2-socket-chat App', function() {
  let page: Ng2SocketChatPage;

  beforeEach(() => {
    page = new Ng2SocketChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
