"use client";
import TestForm from "@/widgets/AddTest";

export default function AddTest() {
  if (localStorage.getItem("password") === "yaplakal2000") return <TestForm />;
  const password = prompt("Введите пароль");
  if (password === "yaplakal2000") {
    localStorage.setItem("password", password);
    return <TestForm />;
  }
  window.location.reload();
}
