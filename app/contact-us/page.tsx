import React from "react";

export default function ContactUs() {
  return (
    <div className="flex flex-1 min-h-full items-center justify-center animate-fade-in">
      <div className="w-full max-w-2xl">
        <h1 className="text-center">Contact Us</h1>
        <div className="bg-blue-50 rounded-t-xl shadow-t p-6 pb-12 border-b border-blue-200 mt-6">
          <p className="mb-4">
            Please contact us either by post, email or telephone using the
            details below.
          </p>
          <p>
            <span className="font-semibold text-blue-800">Telephone:</span>{" "}
            01793 816061
          </p>
          <p>
            <span className="font-semibold text-blue-800">Email:</span>{" "}
            <a
              href="mailto:info@rkhealthcare.com"
              className="text-blue-700 underline hover:text-blue-900 transition"
            >
              info@rkhealthcare.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-blue-800">Address:</span>
            <br />
            c/o The Ridgeway Hospital
            <br />
            Moormead Road
            <br />
            Wroughton
            <br />
            Swindon
            <br />
            SN4 9DD
          </p>
        </div>
      </div>
    </div>
  );
}
