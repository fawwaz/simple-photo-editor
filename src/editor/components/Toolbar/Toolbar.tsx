import { useFilePickerCallbacks } from 'editor/hooks/useFilePicker';
import { FiDownload } from 'react-icons/fi';
import React from 'react';
import Button from 'shared/components/Button/Button';

export default function Toolbar() {
  const { exportJSON: handleExportJSON, clearCanvas } =
    useFilePickerCallbacks();

  const handleCreateNew = () => {
    clearCanvas();
  };

  return (
    <div className="flex py-2 mx-auto justify-between">
      <Button onClick={handleCreateNew}>Create New</Button>
      <Button
        onClick={handleExportJSON}
        icon={<FiDownload className="text-gray-800 w-4 h-4 mr-2" />}
      >
        Export as JSON
      </Button>
    </div>
  );
}
