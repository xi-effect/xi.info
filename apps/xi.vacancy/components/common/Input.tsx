import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultInputPropsT = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputT = {
  title: string;
  className?: string;
  id: string;
  error?: boolean;
  helperText?: string;
} & DefaultInputPropsT;

const Input = forwardRef<HTMLInputElement, InputT>((props, ref) => {
  const { className, id, title, error, helperText, ...restProps } = props;

  return (
    <label
      htmlFor={id}
      className={`flex flex-col text-[16px] leading-[22px] relative ${className}`}
    >
      {title}
      <input
        ref={ref}
        id={id}
        type="text"
        className={`${
          error ? 'border-red-20' : 'border-gray-30'
        } h-[32px] sm:h-[48px] mt-2 w-full p-[12px] rounded-[8px] border-2 transition-colors`}
        {...restProps}
      />

      <div
        className={`${
          helperText ? 'scale-1' : 'scale-0'
        } w-full absolute text-red-60 top-[55%] left-[15px]  transition-transform`}
      >
        {helperText}
      </div>
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
