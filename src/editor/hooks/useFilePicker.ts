import React, { useCallback } from 'react';
import { fabric } from 'fabric';
import { saveAs } from 'file-saver';

import { useFabricCanvas } from 'shared/contexts/CanvasContext';

type UseFilePickerParam = {
  onFileSelected?: () => void;
};

export function useFilePickerCallbacks(param: UseFilePickerParam) {
  const { canvas } = useFabricCanvas();

  const handleLoadFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files) {
        return;
      }

      const file = event.currentTarget.files[0];

      // Check the file type if it is an image or stored json file
      if (file.type === 'application/json') {
        var reader = new FileReader();

        // Read the file as text
        reader.readAsText(file, 'UTF-8');

        // Load the parsed data to canvas
        reader.onload = function (evt) {
          canvas?.loadFromJSON(evt?.target?.result, function () {
            canvas.renderAll();
            param.onFileSelected && param.onFileSelected();
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
            img.set({
              angle: 0,
              padding: 0,
              height: imgObj.height,
              width: imgObj.width,
            });

            canvas?.centerObject(img);
            canvas?.add(img);
            canvas?.renderAll();
            param.onFileSelected && param.onFileSelected();
          };
        };
        reader.readAsDataURL(file);
      }
    },
    [canvas, param.onFileSelected]
  );

  const handleExportJSON = useCallback(() => {
    const fileToSave = new Blob([JSON.stringify(canvas)], {
      type: 'application/json',
    });
    saveAs(fileToSave, 'photo.json');
  }, []);

  return {
    handleLoadFile,
    handleExportJSON,
  };
}
