import { ContainerDiv } from "./Layout.styled";
import NavBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />

      <div>
        <ContainerDiv>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </ContainerDiv>
      </div>
    </>
  );
}
