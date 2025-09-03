import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="overlay">
        <Menu />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
