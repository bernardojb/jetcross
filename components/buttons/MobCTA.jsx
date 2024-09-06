import React from "react";
import Link from "next/link";

const MobCTA = ({ link, text, icon, type, children, ...props }) => {
  if (link == "") {
    return (
      <button disabled className={`${type} mb-[10px]`}>
        {text}
      </button>
    );
  }
  return (
    <div className="w-fit">
      <Link href={link}>
        <button>
          <div className={`${type} group flex flex-row items-center`}>
            <span>{text}</span>
            {icon && (
              <div className="ml-[10px] h-[18px] w-[18px] duration-200 ease-out group-hover:rotate-45 group-hover:transition-all">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 11.5455L13 5L6.45454 5"
                    stroke="#9C99A3"
                    stroke-width="2"
                    className="group-hover:stroke-text-btn-light"
                  />
                  <path
                    d="M13 5L5 13"
                    stroke="#9C99A3"
                    stroke-width="2"
                    className="group-hover:stroke-text-btn-light"
                  />
                </svg>
              </div>
            )}
          </div>
        </button>
      </Link>
    </div>
  );
};

export default MobCTA;
