import { Fragment } from "react";
import MainNagivation from "./main-navigation/main-navigation";

type LayoutProps = {
    children: JSX.Element
}

function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <MainNagivation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
