import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import clsx from 'clsx';

import { useFabricCanvas } from 'shared/contexts/CanvasContext';
import { getCanvasDimension } from 'editor/utils/getCanvasDimension';
import { useImageLoad } from 'editor/contexts/ImageLoadContext';
import { useBrowserSize } from 'shared/contexts/WindowSizeContext';

import styles from './Canvas.module.css';
import Toolbar from '../Toolbar/Toolbar';

export default function Canvas() {
  const { setCanvas } = useFabricCanvas();
  const { width, height } = useBrowserSize();
  const { isLoaded } = useImageLoad();
  const CanvasDimension = getCanvasDimension({ width, height });

  useEffect(() => {
    if (!width || !height) {
      return;
    }

    const fabricCanvas = new fabric.Canvas('main-canvas', {
      width: CanvasDimension.width,
      height: CanvasDimension.height,
      backgroundColor: 'white',
    });
    setCanvas(fabricCanvas);
  }, [width, height]);

  return (
    <>
      <div className={clsx(styles.footer, !isLoaded && styles.hide, 'noprint')}>
        <div className={styles.wrapper}>
          <Toolbar />
        </div>
      </div>
      <div className={clsx(styles.container, !isLoaded && styles.hide)}>
        <canvas id="main-canvas" className={styles.canvas} />
      </div>
    </>
  );
}
