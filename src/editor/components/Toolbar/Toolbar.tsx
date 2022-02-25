import { useFilePickerCallbacks } from 'editor/hooks/useFilePicker';
import {
  FiDownload,
  FiArrowLeft,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
} from 'react-icons/fi';
import React from 'react';
import Button from 'shared/components/Button/Button';
import { M_SCREEN } from 'shared/hooks/useWindowSize';
import { useBrowserSize } from 'shared/contexts/WindowSizeContext';
import { useFabricCanvas } from 'shared/contexts/CanvasContext';

export default function Toolbar() {
  const { exportJSON: handleExportJSON, clearCanvas } =
    useFilePickerCallbacks();
  const ScreenSize = useBrowserSize();
  const { canvas } = useFabricCanvas();

  const handleCreateNew = () => {
    clearCanvas();
  };

  const handleMove = (direction: string) => {
    if (!canvas) return;

    const imgObj = canvas.getObjects('image')[0];

    if (direction == 'left') {
      if (imgObj && imgObj.left) {
        imgObj.left -= 10;
      }
    } else if (direction == 'right') {
      if (imgObj && imgObj.left) {
        imgObj.left += 10;
      }
    } else if (direction == 'up') {
      if (imgObj && imgObj.top) {
        imgObj.top -= 10;
      }
    } else if (direction == 'down') {
      if (imgObj && imgObj.top) {
        imgObj.top += 10;
      }
    }

    imgObj.setCoords();
    canvas.renderAll();
  };

  const isExpanded =
    typeof ScreenSize.width === 'undefined'
      ? false
      : ScreenSize.width > M_SCREEN;

  return (
    <div className="flex py-2 mx-auto justify-between">
      <Button onClick={handleCreateNew}>Create New</Button>
      <div className="flex justify-center items-center">
        <Button
          onClick={() => handleMove('left')}
          icon={<FiArrowLeft className={`text-gray-800 w-4 h-4`} />}
        />
        <Button
          className="ml-1"
          onClick={() => handleMove('up')}
          icon={<FiArrowUp className={`text-gray-800 w-4 h-4`} />}
        />
        <Button
          className="ml-1"
          onClick={() => handleMove('down')}
          icon={<FiArrowDown className={`text-gray-800 w-4 h-4`} />}
        />
        <Button
          className="ml-1"
          onClick={() => handleMove('right')}
          icon={<FiArrowRight className={`text-gray-800 w-4 h-4`} />}
        />
      </div>
      <Button
        onClick={handleExportJSON}
        icon={
          <FiDownload
            className={`text-gray-800 w-4 h-4 ${isExpanded && 'mr-2'}`}
          />
        }
      >
        {isExpanded ? 'Export as JSON' : ''}
      </Button>
    </div>
  );
}
