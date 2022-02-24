import { useFilePickerCallbacks } from 'editor/hooks/useFilePicker';
import { FiDownload } from 'react-icons/fi';
import React from 'react';
import Button from 'shared/components/Button/Button';
import { M_SCREEN } from 'shared/hooks/useWindowSize';
import { useBrowserSize } from 'shared/contexts/WindowSizeContext';

export default function Toolbar() {
  const { exportJSON: handleExportJSON, clearCanvas } =
    useFilePickerCallbacks();
  const ScreenSize = useBrowserSize();

  const handleCreateNew = () => {
    clearCanvas();
  };

  const isExpanded =
    typeof ScreenSize.width === 'undefined'
      ? false
      : ScreenSize.width > M_SCREEN;

  return (
    <div className="flex py-2 mx-auto justify-between">
      <Button onClick={handleCreateNew}>Create New</Button>
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
