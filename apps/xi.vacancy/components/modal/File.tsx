import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FileListT } from './UploadFile';

type FileT = {
  deleteFile: (id: string) => void;
} & FileListT;

const File: React.FC<FileT> = (props) => {
  const { file, id, deleteFile } = props;
  const onFileDelete = () => {
    setShow(false);

    setTimeout(() => deleteFile(id), 300);
  };

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShow(true));
  }, []);

  return (
    <li
      className={`${
        show ? 'px-[12px] py-[8px] h-[40px] my-[4px] opacity-1' : 'opacity-0 p-0 h-0 m-0'
      } 
       duration-300 relative transition-all shadow-md  bg-gray-0  rounded-[8px] flex justify-between content-center `}
    >
      <span className="absolute overflow-hidden whitespace-nowrap text-ellipsis w-[80%]">{file.name}</span>

      <button onClick={onFileDelete} type="button" className="ml-auto resume-btn bg-transparent">
        <Image
          width={24}
          height={24}
          alt="delete file"
          src="/icons/close.svg"
          style={{ filter: 'invert(53%)' }}
        />
      </button>
    </li>
  );
};

export default File;
