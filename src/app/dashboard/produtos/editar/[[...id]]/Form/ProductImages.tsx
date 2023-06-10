/* eslint-disable @next/next/no-img-element */
'use client'

import { IProduct } from '@/interfaces/IProduct'
import { ChangeEvent, useRef, useState } from 'react'

export default function ProductImages({ product }: { product: IProduct | null }) {
  const [tempFiles, setTempFiles] = useState<string[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) return

    setTempFiles(null)
    for (let i = 0; i < files.length; i++) {
      const previewUrl = URL.createObjectURL(files[i])
      setTempFiles((prev) => (prev ? [...prev, previewUrl] : [previewUrl]))
    }
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Outras imagens</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full">
          <div
            className={`border border-dashed border-gray-500 ${
              tempFiles ? 'flex flex-wrap' : ''
            } relative hover:border-gray-700 text-gray-500 hover:text-gray-700`}
          >
            <input
              type="file"
              name="files"
              ref={inputRef}
              multiple
              onChange={handleFilesChange}
              className={`cursor-pointer relative ${tempFiles ? 'hidden' : 'block'} opacity-0 w-full h-full p-20 z-50`}
            />
            {tempFiles ? (
              tempFiles.map((tempFile, index) => (
                <div
                  key={index}
                  className="text-center px-2 py-2 w-1/2 m-auto flex justify-center flex-wrap cursor-pointer"
                  onClick={() => inputRef.current?.click()}
                >
                  <img key={tempFile} src={tempFile} alt="" className="aspect-video w-full object-cover" />
                </div>
              ))
            ) : (
              <div className="text-center px-2 py-2 h-full absolute top-0 right-0 left-0 m-auto flex justify-center flex-wrap flex-col items-center flex-1">
                <svg className="w-8 h-8 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <h4>
                  Arraste a foto aqui
                  <br />
                  ou
                </h4>
                <p className="">Clique aqui</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
