import React from 'react';
import clsx from 'clsx';
import { FiUploadCloud } from 'react-icons/fi';

import { useFilePickerCallbacks } from 'editor/hooks/useFilePicker';
import styles from './FilePicker.module.css';

type FilePickerProps = {
  className?: string;
  onFileSelected?: () => void;
};

export default function FilePicker(props: FilePickerProps) {
  const { handleLoadFile } = useFilePickerCallbacks({
    onFileSelected: props.onFileSelected,
  });

  return (
    <div className={clsx('noprint', styles.container, props.className)}>
      <form>
        <label htmlFor="file-picker">
          <FiUploadCloud size="150" className={styles.icon} />
          <input
            id="file-picker"
            type="file"
            name={'photo'}
            accept="image/png, image/jpeg, application/JSON"
            onChange={handleLoadFile}
            className="hidden"
          />
          <h4>Tap the icon to pick image or load JSON file</h4>
        </label>
      </form>
    </div>
  );
}
