import "./CopyRight.css";
import { FootersLinksData } from "../../Data/data";
export default function CopyRight() {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>@2026 Aditya Kumar Pathak . All rights reserved.</p>
        <div className="footer-socials">
          {FootersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
