import React from "react";

function Pill1({ text, link, pillHighlightText, pillHighlightColor }) {
  return (
    <div class=" mb-8 sm:flex sm:justify-center">
      <div class="relative rounded-full border border-[#C0C0C033] px-3 py-1 text-sm leading-6 text-typo-secondary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {text}
        <a href={link} class={`font-semibold ${pillHighlightColor}`}>
          <span class="absolute inset-0" aria-hidden="true"></span>{" "}
          {pillHighlightText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default Pill1;
