"use client";

import { Button } from "@/components/ui/button";
import { memo, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export const Dropzone = memo(() => {
  const { isDragActive, acceptedFiles, getRootProps, getInputProps } =
    useDropzone();
  return (
    <>
      <Card className="w-full shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-neutral-800">
            File Upload
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            {...getRootProps({ className: "dropzone" })}
            className={cn(
              "hover:cursor-pointer relative border-2 border-dashed rounded-lg transition-all duration-150 ease-in-out",
              "flex flex-col items-center justify-center py-12 px-6 text-center",
              isDragActive
                ? "border-zinc-500 bg-zinc-50"
                : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50",
            )}
          >
            <input {...getInputProps()} />
            <p>Drag & Drop here</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
});
