"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ThemedImageProps = {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function ThemedImage({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  fill,
  sizes,
  priority,
  className = "",
}: ThemedImageProps) {
  const { theme } = useTheme();
  const src = theme === "light" ? `${BASE_PATH}${lightSrc}` : `${BASE_PATH}${darkSrc}`;

  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
