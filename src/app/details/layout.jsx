export async function generateMetadata() {
  const res = await fetch(process.env.HOST + "/api/news/details");
  const JSON = await res.json();
  return {
    title: "details",
  };
}
const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
