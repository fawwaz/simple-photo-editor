import { getImageScale } from 'editor/utils/getImageScale';

describe('Should return image scale correcly', () => {
  test('1. Vertical picture', () => {
    expect(
      getImageScale({ width: 200, height: 400 }, { width: 600, height: 900 })
    ).toEqual(3);
  });

  test('2. Horizontal picture', () => {
    expect(
      getImageScale({ width: 400, height: 200 }, { width: 600, height: 800 })
    ).toEqual(4);
  });
});
