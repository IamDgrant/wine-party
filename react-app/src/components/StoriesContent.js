import React from "react";
import "../components/styling/storiesContentStyling.css";
import storiesImg from "../assets/images/pexels-cottonbro-3171736.jpg";

const StoriesContent = () => {
  return (
    <div className="stories-content-container">
      <div className="stories-title">Interesting Wine Stories</div>
      <div className="wine-news-img">
        <img
          src={storiesImg}
          alt="wine glass on tray"
          style={{ minWidth: "600px"}}
        />
      </div>
      <div className="stories-content">
        <div className="tasting-section-text1">
          {" "}
          <p>
            <span>
              I don’t know about you, but I’m definitely ready for some cooler
              weather… hopefully with some rain. If there’s a fire to be had, I
              want it in my hearth, not torching the hillside a few miles away.
              <br></br>
              <br></br>
              With cooler temperatures in mind, here’s our annual look at the
              top 10 wines for the winter season, all drawn from our reviews
              over the last year and all tailor-made for cool-weather enjoyment.
              <br></br>
              <br></br>
              If you’re looking to pick one up, you can find many of these wines
              via our partners at Drizly and Wine.com. Also check out our list
              of the top 10 wines for summer 2020 — all of which are still
              perfectly drinkable today.
            </span>
          </p>
        </div>
        <div className="tasting-section-title">1. Wine Leather</div>
        <div className="tasting-section-text2">
          <p>
            <span>
              Gianpiero Tessitore, an Italian entrepreneur in Milan, is working
              on launching a leather made from wine extracts. Tessitore says
              “the product is aimed at consumers who prefer to spend money on
              green and cruelty-free alternatives to animal and oil-based
              synthetic leathers.” He has patented the wine leather production
              process and named his company Vegea. I can’t wait to see his
              products! For vegetarians, this could be the answer to wearing
              leather shoes and carrying a leather handbag!
            </span>
          </p>
        </div>
        <div className="tasting-section-title">2. Wasps and Wine</div>
        <div className="tasting-section-text3">
          <p>
            <span>
              According to listverse.com, even if you don’t like wasps, you
              should thank them for wine. Really? Really! Apparently, a fungus
              that grows on vineyard grapes called Saccharomyces cerevisiae is
              key to making wine. The problem is that it only grows during the
              summer and is killed off by the winter chill. Thankfully, wasps
              love grapes, eat them during the summer months, and fly back to
              their nests, “where they give the masticated mush to their larvae.
              When they eat the fruit, the insects ingest the yeast, and their
              stomachs provide the perfect environment for it to survive the
              frosty months. More importantly, when wasps feed their young, they
              pass the fungus to their babies. That way, when the larvae mature,
              they reintroduce S. cerevisiae to the vineyards and start the
              process all over again.”
            </span>
          </p>
        </div>
        <div className="tasting-section-title">3. Wine and Coke</div>
        <div className="tasting-section-text4">
          <p>
            <span>
              Jancis Robinson, British wine journalist and Master of Wine
              highlighted that in China many people have started to drink wine
              “because it’s fashionable.” The problem is that few of these
              people have developed a taste for wine. So many of them buy very
              expensive wines and mix in Coke or Sprite. Wow.
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
          4. High-altitude Vineyard in Salta, Argentina
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
              You may have heard of the word terroir (pronounced tare wahr),
              which is a French term that represents the growing environment of
              the grapes. It encompasses everything from the soil content to the
              slant of the hill to the altitude of the vineyard, and it can make
              a tremendous different to the taste of the wine. In Napa, some of
              the most esteemed vineyards are in the “mountains.” I put that
              word in quotes, because Howell Mountain, for example, has an
              elevation of 1,683 feet. So when I read this article about the
              highest altitude vineyard in the world, I was blown away. It’s
              Colomé, which is in the Upper Calchaquí Valleys in the province of
              Salta, Argentina. This area is in the northwest of Argentina and
              shares a northern border with Bolivia and Paraguay and has Chile
              on the east. Their highest vineyard, aptly named Altura Máxima,
              has an altitude of 10,206 feet. Wow! Apparently, the white grape
              Torrontes grows very well there. I would love to try the wines
              from the vineyard. If you’ve tried them, please share your tasting
              experience with us.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default StoriesContent;
