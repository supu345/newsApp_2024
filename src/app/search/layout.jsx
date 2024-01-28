export async function generateMetadata() {
  const res = await fetch(process.env.HOST + "/api/user/news/search");

  return {
    title: "search",
  };
}
const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
