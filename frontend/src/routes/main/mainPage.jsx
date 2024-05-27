import Rank from "../../components/rank/Rank";
import HeaderPage from "../../components/navbar/HeaderPage";
import Search from "../../components/search/search";
import Sort from "../../components/sort/sort";
const MainPage = () => {
  return (
    <div>
      <HeaderPage />
      <Rank />
      <Search/>
      <Sort/>
    </div>
  );
};
export default MainPage;
