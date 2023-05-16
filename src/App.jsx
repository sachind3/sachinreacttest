import { useContext } from "react";
import { AppContext } from "./context/Context";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const { loading } = useContext(AppContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
