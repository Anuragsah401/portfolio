import React from "react";
import { Switch } from "@headlessui/react";
import ReactTooltip from "react-tooltip";

const ToggleBtn = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <li className="p-[20px] ">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-teal-900" : "bg-[#eee]"}
                                        relative inline-flex flex-shrink-0 h-[20px] w-[34px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-3.5" : "translate-x-0"}
                                                pointer-events-none inline-block h-[16px] w-[16px] rounded-full ${
                                                  enabled ? "bg-[#000]" : "bg-[#072227]"
                                                } shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </li>
  );
};

const TogglBtnAlt = () => {
  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-center w-full mb-12">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />

            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>

            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </label>
        <ReactTooltip id="toggle_dark" place="bottom" type="light" effect="float">
          Toggle Dark / Normal
        </ReactTooltip>
      </div>
    </div>
  );
};

export default ToggleBtn;
