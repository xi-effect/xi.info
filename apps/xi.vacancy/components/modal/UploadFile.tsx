import { Control, Controller } from 'react-hook-form';
import React, { useRef, useState, DragEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import { FormDataT } from './SendResumeButton';
import FileListItem from './File';

type UploadFileT = {
  control: Control<FormDataT, any>;
};

export type FileListT = {
  id: string;
  file: File;
};

const UploadFile: React.FC<UploadFileT> = (props) => {
  const { control } = props;

  const [drag, setDrag] = useState<boolean>(false);

  const [files, setFiles] = useState<FileListT[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const deleteFile = (id: string) => setFiles((list) => list.filter((file) => file.id !== id));

  const onDragStart = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDragDesc = drag ? (
    <>
      Отпустите файл
      <span className="text-gray-60 ml-[4px]">чтобы загрузить</span>
    </>
  ) : (
    <>
      Выберите файл
      <span className="text-gray-60 ml-[4px]">или перетащите сюда</span>
    </>
  );

  return (
    <Controller
      name="file"
      control={control}
      render={({ field: { onChange } }) => {
        const addFileList = (file: File[]) => {
          const fileWithId = file.map((file: File) => ({ file, id: v4() }));

          const currentFiles = [...files, ...fileWithId];

          setFiles(currentFiles);

          onChange(currentFiles);
        };

        const onDrop = (e: DragEvent<HTMLLabelElement>) => {
          e.preventDefault();

          addFileList([...e.dataTransfer.files]);
        };

        const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
          if (e.currentTarget.files?.length) addFileList([...e.currentTarget.files]);
        };

        return (
          <div className="flex flex-col text-[16px] mb-[12px] sm:mb-[20px]">
            <span className="leading-[22px]">Приложи файлы</span>

            <label
              htmlFor="file"
              onDrop={onDrop}
              onDragStart={onDragStart}
              onDragLeave={onDragLeave}
              onDragOver={onDragStart}
              className="mb-[4px] cursor-pointer flex h-[32px] sm:h-[48px] mt-2 w-full border-[1px] rounded-[6px] border-gray-40 border-dashed px-[8px] py-[5px] text-[14px] text-gray-100 sm:p-[12px]"
            >
              {onDragDesc}

              <Image
                width={16}
                height={16}
                src="/icons/upload.svg"
                alt="upload file"
                className="ml-auto"
              />

              <input
                type="file"
                id="file"
                multiple
                ref={inputRef}
                className="hidden"
                onChange={onInputChange}
              />
            </label>

            {files.length ? (
              <ul>
                {files.map(({ file, id }) => (
                  <FileListItem deleteFile={deleteFile} id={id} file={file} key={id} />
                ))}
              </ul>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default UploadFile;
