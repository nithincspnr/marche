import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src={window.location.origin + "/marche-health-logo.svg"}
        alt="logo"
        className="logo"
      />
    </header>
  );
}
