import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";

export default function App() {
  return (
    <section className={css.container}>
      <Description />
    </section>
  );
}
