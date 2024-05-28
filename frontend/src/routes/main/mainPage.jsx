import Rank from "../../components/rank/Rank";
import HeaderPage from "../../components/navbar/HeaderPage";
import Search from "../../components/search/search";
import Sort from "../../components/sort/sort";
import FooterPage from "../../components/footer/FooterPage";
const MainPage = () => {
  return (
    <div>
      <HeaderPage />
      <Rank />
      <Search />
      <Sort />
      <FooterPage />
    </div>
  );
};
export default MainPage;
