import React, { useMemo, useState } from "react";
import { FileUploader } from 'react-drag-drop-files';
import { fileToBase64 } from '../../utils/helpers';
import { RxCross1 } from "react-icons/rx";

type FileInputProps = {
  label?: string;
  handleChange: (file: any) => void;
  allowPreviewImage: boolean;
  previousImage?: any;
}

const allowedTypes = ["png", "jpg", "jpeg", "svg"];

const FileInput = ({ label, handleChange, allowPreviewImage, previousImage }: FileInputProps) => {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [fileName, setFileName] = useState('');

  const displayAllowedTypes = useMemo(() => {
    let concatTypes = '';
    allowedTypes.forEach((type) => {
      concatTypes += `.${type}, `;
    });
    return concatTypes.slice(0, -2);
  }, []);

  const onDelete = () => {
    setPreviewImage(null);
    setFileName('');
    if (handleChange) {
      handleChange(null);
    }
  };

  const onChange = async (file: File) => {
    setFileName(file.name);
    setPreviewImage(URL.createObjectURL(file));
    if (handleChange) {
      const convertedFile = await fileToBase64(file);
      handleChange(convertedFile);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <FileUploader name="file" types={allowedTypes} handleChange={onChange} multiple={false}>
        <div className="relative flex border rounded-md border-gray-300 border-dashed border-2 bg-gray-100 hover:opacity-75 hover:border-gray-400 justify-center cursor-pointer">
          <div className="flex my-5">
            <div className="text-cyan-900">{label}</div>
          </div>
        </div>
      </FileUploader>
      {previewImage && (
        <div className="relative flex border p-5 bg-gray-100 mt-3 rounded-md">
          {allowPreviewImage ? (
            <div>
              <div className="flex h-12 justify-center mb-1">
                <img className="shadow-md hover:scale-110" src={previewImage} alt="logo" />
              </div>
              <div className="items-center px-5 text-xs break-words">{fileName}</div>
            </div>
          ) : (
            <div className="px-5 text-xs break-words">{fileName}</div>
          )}
          <div className="absolute top-2 right-2">
            <RxCross1
              className="h-5 text-gray-500 hover:cursor-pointer rounded-full hover:text-primary-600 hover:bg-gray-200"
              onClick={onDelete}
            />
          </div>
        </div>
      )}
      {!previewImage && (
        <div className="flex justify-end text-xs text-gray-500 text-justify font-normal leading-5 mb-4 mt-1">
          Allowed formats
          <span className="text-primary-700 ml-1"> {displayAllowedTypes}.</span>
        </div>
      )}
    </div>
  );
};

export default FileInput;
