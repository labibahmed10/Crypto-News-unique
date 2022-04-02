import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="flex h-[66vh] items-center justify-center">
        <button
          type="button"
          className="inline-flex items-center px-5 py-3 font-semibold  text-sm shadow-md rounded-md text-white bg-cyan-600 cursor-not-allowed"
          disabled=""
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Please Wait...
        </button>
      </div>
    </div>
  );
};

export default Spinner;
