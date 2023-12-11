import "./Brands.css";

// Import Data -----------------------
import { brandsData } from "../../Data/data";

function Brands() {
  return (
    <div className="Brands">
      <div className="container brands-container">
        {brandsData.map(({ img }, index) => {
          return (
            <div className="brand" key={index}>
              <img src={img} alt="no image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
