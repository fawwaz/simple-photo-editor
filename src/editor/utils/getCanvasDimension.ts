import { M_SCREEN, Size, S_SCREEN } from 'shared/hooks/useWindowSize';

export function getCanvasDimension(screen: Size) {
  if (!screen.width || !screen.height) {
    return {
      width: 0,
      height: 0,
    };
  }

  if (screen.width > M_SCREEN) {
    return {
      width: 600,
      height: 900,
    };
  } else if (screen.width > S_SCREEN) {
    return {
      width: 400,
      height: 600,
    };
  } else {
    return {
      width: 300,
      height: 450,
    };
  }
}
