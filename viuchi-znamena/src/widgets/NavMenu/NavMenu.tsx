import Link from "next/link";
import style from "./NavMenu.module.css";

interface Props {
  stateMenu: boolean;
}

export default function NavMenu({ stateMenu }: Props) {
  return (
    <div
      className={stateMenu ? [style.menu, style.active].join(" ") : style.menu}
    >
      <div className={style.container}>{/* <Link></Link> */}</div>
    </div>
  );
}
