import React, { useCallback } from 'react';
import { fabric } from 'fabric';
import { saveAs } from 'file-saver';

import { useFabricCanvas } from 'shared/contexts/CanvasContext';
import { useImageLoad } from 'editor/contexts/ImageLoadContext';
import { getImageScale } from 'editor/utils/getImageScale';
import { useBrowserSize } from 'shared/contexts/WindowSizeContext';

export function useFilePickerCallbacks() {
  const { canvas } = useFabricCanvas();
  const { setIsLoaded } = useImageLoad();
  const { width, height } = useBrowserSize();

  const loadFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files) {
        return;
      }

      if (!width || !height) {
        return;
      }

      const file = event.currentTarget.files[0];

      if (!file) {
        return;
      }

      // Check the file type if it is an image or stored json file
      if (file.type === 'application/json') {
        var reader = new FileReader();

        // Read the file as text
        reader.readAsText(file, 'UTF-8');

        // Load the parsed data to canvas
        reader.onload = function (evt) {
          canvas?.loadFromJSON(evt?.target?.result, function () {
            canvas.renderAll();
            setIsLoaded(true);
          });
        };
      } else if (file.type === 'image/png' || file.type == 'image/jpeg') {
        const reader = new FileReader();

        // Create callback to parse image
        reader.onload = function (evt) {
          const imgObj = new Image();

          imgObj.src = evt?.target?.result as string;

          // When the image is loaded, we construct the object inside the canvas
          imgObj.onload = function () {
            let img = new fabric.Image(imgObj);
            const scale = getImageScale(imgObj, { width, height });

            img.set({
              angle: 0,
              padding: 0,
              height: imgObj.height,
              width: imgObj.width,
              scaleX: scale,
              scaleY: scale,
            });

            canvas?.centerObject(img);
            canvas?.add(img);
            console.log(canvas?.toJSON());
            canvas?.renderAll();
            setIsLoaded(true);
          };
        };
        reader.readAsDataURL(file);
      }
    },
    [canvas]
  );

  const exportJSON = useCallback(() => {
    const fileToSave = new Blob([JSON.stringify(canvas)], {
      type: 'application/json',
    });
    saveAs(fileToSave, 'photo.json');
  }, []);

  const clearCanvas = useCallback(() => {
    canvas?.clear();
    canvas?.setBackgroundColor('white', () => {
      canvas?.renderAll();
      setIsLoaded(false);
    });
  }, [canvas]);

  return {
    loadFile,
    exportJSON,
    clearCanvas,
  };
}
