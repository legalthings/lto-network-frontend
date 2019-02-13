import { ShortPipe } from './short.pipe';

describe('shared/ShortPipe', () => {
  let pipe: ShortPipe;
  const TEST_STR = 'abcdefghijklmnopqrstuvwxyz';

  beforeEach(() => {
    pipe = new ShortPipe();
  });

  it('should add "..." if input length has been shortened', () => {
    expect(pipe.transform(TEST_STR, 5)).toEqual('abcde...');
  });

  it('should not shorten string if length smaller than provided slice size', () => {
    expect(pipe.transform(TEST_STR, 100)).toEqual(TEST_STR);
  });
});
