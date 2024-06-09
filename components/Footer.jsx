import Contacts from "./Contacts";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Muzaffar
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 Muzaffar
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <Contacts />
      </span>
    </div>
  )
}

export default Footer