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
  const { loadFile: handleLoadFile } = useFilePickerCallbacks();

  return (
    <div className={clsx('noprint', styles.container, props.className)}>
      <form>
        <div className={styles.wrapper}>
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
            <h4 className="cursor-pointer text-gray-500 w-9/12 mx-auto text-center">
              Tap the icon to pick image or load JSON file
            </h4>
          </label>
        </div>
      </form>
    </div>
  );
}
