import { getCanvasDimension } from 'editor/utils/getCanvasDimension';

describe('should return canvas dimension configuration correctly', () => {
  test('1. No screen dimension', () => {
    expect(getCanvasDimension({ width: undefined, height: undefined })).toEqual(
      { width: 0, height: 0 }
    );
  });

  test('2. Large Screen', () => {
    expect(getCanvasDimension({ width: 1500, height: 1200 })).toEqual({
      width: 600,
      height: 900,
    });
  });

  test('2. Medium Screen', () => {
    expect(getCanvasDimension({ width: 700, height: 600 })).toEqual({
      width: 400,
      height: 600,
    });
  });

  test('3. Small Screen', () => {
    expect(getCanvasDimension({ width: 320, height: 200 })).toEqual({
      width: 300,
      height: 450,
    });
  });
});
