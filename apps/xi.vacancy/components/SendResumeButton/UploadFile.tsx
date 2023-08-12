import { Control, Controller } from 'react-hook-form';
import React, { useRef, useState, DragEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { FormDataT } from './index';

type UploadFileT = {
  control: Control<FormDataT, any>;
};

const UploadFile: React.FC<UploadFileT> = (props) => {
  const { control } = props;

  const [drag, setDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

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
      render={({ field: { onChange, value } }) => {
        const onDrop = (e: DragEvent<HTMLLabelElement>) => {
          e.preventDefault();
          onChange(e.dataTransfer.files[0]);
        };

        const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.files?.[0]);

        return (
          <div className=" flex flex-col text-[16px] mb-[16px] sm:mb-[24px]">
            <span className="leading-[22px]">Приложи файлы</span>

            <label
              htmlFor="file"
              onDrop={onDrop}
              onDragStart={onDragStart}
              onDragLeave={onDragLeave}
              onDragOver={onDragStart}
              className="cursor-pointer flex h-[32px] sm:h-[48px] mt-2 w-full border-[1px] rounded-[6px] border-gray-40 border-dashed px-[8px] py-[5px] text-[14px] text-gray-100 sm:p-[12px]"
            >
              {value ? value.name : onDragDesc}

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
                ref={inputRef}
                className="hidden"
                onChange={onInputChange}
              />
            </label>
          </div>
        );
      }}
    />
  );
};

export default UploadFile;
