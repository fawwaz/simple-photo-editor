import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import clsx from 'clsx';

import { useFabricCanvas } from 'shared/contexts/CanvasContext';
import { useWindowSize } from 'shared/hooks/useWindowSize';
import styles from './Canvas.module.css';
import Toolbar from '../Toolbar/Toolbar';
import { getCanvasDimension } from 'editor/utils/getCanvasDimension';
import { useImageLoad } from 'editor/contexts/ImageLoadContext';

export default function Canvas() {
  const { setCanvas } = useFabricCanvas();
  const { width, height } = useWindowSize();
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
      <div className={clsx(styles.footer, !isLoaded && styles.hide)}>
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
