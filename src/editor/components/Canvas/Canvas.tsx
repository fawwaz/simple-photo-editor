import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import clsx from 'clsx';

import { useFabricCanvas } from 'shared/contexts/CanvasContext';
import { useWindowSize } from 'shared/hooks/useWindowSize';
import styles from './Canvas.module.css';

type CanvasProps = {
  isFileLoaded: boolean;
};

export default function Canvas(props: CanvasProps) {
  const { setCanvas } = useFabricCanvas();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!width || !height) {
      return;
    }

    const fabricCanvas = new fabric.Canvas('main-canvas', {
      width: 100,
      height: 150,
      backgroundColor: 'pink',
    });
    setCanvas(fabricCanvas);
  }, [width, height]);

  return (
    <div className={clsx(styles.container, !props.isFileLoaded && styles.hide)}>
      <canvas
        id="main-canvas"
        className={styles.canvas}
        width={100}
        height={150}
      />
    </div>
  );
}
