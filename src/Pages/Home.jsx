// components imports---------------
import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import FeaturesBooks from "../Components/FeaturesBooks/FeaturesBooks";
import BestSeelingBook from "../Components/BestSeelingBook/BestSeelingBook";
import PopularBooks from "../Components/PopularBooks/PopularBooks";
import Quote from "../Components/Quote/Quote";
import LatestArticle from "../Components/LatestArticle/LatestArticle";
export default function Home() {
  return (
    <div>
      <Header />
      <Brands />
      <FeaturesBooks />
      <BestSeelingBook />
      <PopularBooks />
      <Quote />
      <LatestArticle />
    </div>
  );
}
