export async function generateMetadata() {
  const res = await fetch(process.env.HOST + "/api/user/profile/details");
  const JSON = await res.json();
  return {
    title: "profile",
  };
}
const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
