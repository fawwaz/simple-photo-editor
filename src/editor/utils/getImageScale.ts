import { Size } from 'shared/hooks/useWindowSize';

export function getImageScale(
  imgSize: Required<Size>,
  screenSize: Required<Size>
) {
  if (isVertical(imgSize)) {
    return screenSize.width / imgSize.width;
  }

  return screenSize.height / imgSize.height;
}

export function isVertical(dimension: Required<Size>) {
  return dimension.height > dimension.width;
}
