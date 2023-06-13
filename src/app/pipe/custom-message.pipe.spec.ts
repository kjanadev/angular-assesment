import { CustomMessagePipe } from './custom-message.pipe';

describe('CustomMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomMessagePipe();
    expect(pipe).toBeTruthy();
  });
});
