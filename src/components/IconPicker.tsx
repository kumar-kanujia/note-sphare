"use client";
import { useTheme } from "next-themes";
import EmojiPicker, { Theme } from "emoji-picker-react";
import React, { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: ReactNode;
  asChild?: boolean;
}

const themeMap = {
  dark: Theme.DARK,
  light: Theme.LIGHT,
};

const IconPicker = ({ children, onChange, asChild }: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;
  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          theme={theme}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default IconPicker;
