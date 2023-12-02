import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import { useFirebase } from "../context/Firebase";
import Profile from "./Profile";

export default function Header() {
  const firebase = useFirebase();
  return (
    <header>
      <h1>
        <NotesIcon />
        Keeper{" "}
      </h1>
      {firebase.isLoggedIn && <Profile />}
    </header>
  );
}
