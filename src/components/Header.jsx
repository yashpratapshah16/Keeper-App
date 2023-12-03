import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import { useFirebase } from "../context/Firebase";
import Profile from "./Profile";

export default function Header() {
  const firebase = useFirebase();
  return (
    <header className=" sm:h-20">
      <h1 className="sm:text-4xl">
        <NotesIcon fontSize="large" />
        Keeper{" "}
      </h1>
      {firebase.isLoggedIn && <Profile />}
    </header>
  );
}
