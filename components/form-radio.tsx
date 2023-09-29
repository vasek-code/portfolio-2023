import { cn } from "@/lib/utils";
import { Radio } from "@nextui-org/react";
import React, { ReactNode } from "react";

export function FormRadio(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      className="w-full mb-2 sm:mb-0 max-w-none"
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse lg:max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
}
