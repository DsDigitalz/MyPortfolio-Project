import React from "react";
import hamburger from './public/hamburger.png'

export default function Navbar() {
  return (
    <section>
      <div className="flex justify-between items-center p-5">
        <div className="font-bold">DSDIGITALZ</div>
        <div><img src={hamburger} alt="" /></div>
      </div>
    </section>
  );
}
