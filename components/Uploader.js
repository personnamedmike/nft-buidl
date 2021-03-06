import React, { useState } from "react";

function Uploader() {
  const [uploadedFile, setUploadedFile] = useState();

  const handleFileUpload = (e) => {
    setUploadedFile(() => e.target.files[0]);
    console.log(uploadedFile);
  };

  const clearUpload = () => {
    setUploadedFile();
  };

  const uploadToNFTStorage = async (e) => {
    e.preventDefault();
    console.log(`uploading to NFT.storage`);
  };

  return (
    <div className="border flex-col mx-auto my-5 p-5 w-8/12">
      <form onSubmit={uploadToNFTStorage}>
        <div className="flex-col justify-center items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-2 text-center"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 m-2 font-bold">
                (MAX FILE SIZE 31GB)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              onChange={handleFileUpload}
              className="hidden flex flex-col justify-center items-center m-auto"
            />
          </label>
          <div className="text-center">
            <p className="flex flex-row align-center justify-center text-s text-gray-500 dark:text-gray-500 m-4">
              {uploadedFile ? uploadedFile.name : null}

              <span className="flex mx-3">
                {uploadedFile ? (
                  <img src="delete.svg" width="20px" onClick={clearUpload} />
                ) : null}
              </span>
            </p>
          </div>
          <label>
            <input
              type="submit"
              value="Upload"
              className="flex items-center justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Uploader;
