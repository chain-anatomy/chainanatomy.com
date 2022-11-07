import Logo from "../../../components/logo/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex bg-main-bg text-main-white w-full h-20 items-center">
      <div className="flex-1 w-1/2 pl-8 pt-1">
        <Logo />
      </div>
      <ul className="flex-1 w-1/2 flex flex-row justify-between pr-8 font-bold text-base">
        <li className="flex-1 text-center">
          <Link to="#who-we-are" reloadDocument>
            About us
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link to="#services" reloadDocument>
            Services
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link to="#contact-us" reloadDocument>
            Supports
          </Link>
        </li>
      </ul>
    </header>
  )
}
