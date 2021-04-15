import React from "react";
import "../components/styling/newsContentStyling.css";
import winepour from "../assets/images/pexels-brett-sayles-1374552.jpeg";
import Footer from "../components/Footer"

const NewsContent = () => {
  return (
    <div className="news-content-container">
      <div className="news-title">The Top 10 Wines for Winter 2021</div>
      <div className="wine-news-img">
        <img
          src={winepour}
          alt="wine glass on tray"
          style={{ minWidth: "600px"}}
        />
      </div>
      <div className="news-content">
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
        <div className="tasting-section-title">
          1. 2013 Sullivan Rutherford James O’Neil Merlot
        </div>
        <div className="tasting-section-text2">
          <p>
            <span>
              A silky fruit explosion that drinks like dessert – but which
              offers ample spice and herbal notes to cut through some of the
              unctuous fruit. Still drinking at the top of its game. $280
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
          2. 2015 Selvapiana Pomino Rosso Villa Di Petrognano DOC
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
              A super-Tuscan style wine from a tiny region in Chianti, made from
              60% Sangiovese and 20% each of Merlot and Cabernet Sauvignon.
              Balanced and exciting, with notes running from black cherry to
              licorice, cola to coffee. Refined and just now starting to settle
              down, this is an outstanding pick for holiday meals despite its
              ultra-affordable price tag. $21
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
          3. 2017 Clos Mogador Priorat Gratallops
        </div>
        <div className="tasting-section-text4">
          <p>
            <span>
              Priorat is built for cold weather, but this wine has so much life
              that if you don’t tuck into it until springtime, you needn’t feel
              bad about it. Silky but incredibly complex, there’s both bright
              berries and austere tanned leather here, locked together in a
              gorgeous dance. $100
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
          4. 2018 Archery Summit Pinot Noir Dundee Hills
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
              Pinot is good pretty much any time of the year, but this Oregon
              bottling has the heft to handle just about anything you might
              throw at it, densely fruity with a touch of chocolate and a
              lightly bittersweet finish. $65
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
          5. 2015 Famiglia Pasqua Amarone della Valpolicella DOCG
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
              Ah, Amarone, the sultry delight of Verona is a classic expression
              of Amarone at its best: spicy, fruity, with a lick of licorice
              bringing up the finish. It’s gorgeously constructed with a
              refreshing, surprisingly approachable finish. $50
            </span>
          </p>
        </div>
        <div className="tasting-section-title">6. 2016 Beaulieu Vineyard Maestro Collection Ranch 1 Rutherford</div>
        <div className="tasting-section-text3">
          <p>
            <span>
            This blend of cabernet sauvignon plus merlot (16%) and petit verdot (6%) is a rich monster that will please any cab fanatic. Blackberries, black cherry, and a grind of pepper give the wine an incredible intensity that finishes with notes of lavender, vanilla, and chocolate. $95
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
        7. 2015 Neyen Espiritu de Apalta Colchagua Valley
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
            Chilean carmenere/cabernet sauvignon blends aren’t often my go-to, but this offering beautifully blends milk chocolate, strawberry, and baking spice notes. The tannins have settled down already, giving the finish an unexpected opulence. $60
            </span>
          </p>
        </div>
        <div className="tasting-section-title">8. 2016 Stags’ Leap Winery Malbec Napa Valley</div>
        <div className="tasting-section-text3">
          <p>
            <span>
            A surprising delight from Stags’ Leap Winery, 100% malbec built to showcase notes of dark chocolate, black raspberry, and currants, with some herbal/spicy elements on the finish. Complex and immersive, save this one for the coolest months (and the biggest meals) of the year. $60

            </span>
          </p>
        </div>
        <div className="tasting-section-title">
        9. 2018 Lula Cellars Pinot Noir Mendocino Peterson Vineyard
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
            Winter wines needn’t be overbearing with tannin or blown-out with fruit. This pinot offers some brightness courtesy of lively cherry and raspberry notes, with a racy acidity to keep the finish clean. $45
            </span>
          </p>
        </div>
        <div className="tasting-section-title">
        10. 2018 Sonoma-Cutrer Pinot Noir Woodford Reserve Barrel Finished
        </div>
        <div className="tasting-section-text3">
          <p>
            <span>
            Here’s a wild card for number 10, the first and only whiskey-barrel finished wine that I’ve enjoyed. Pinot noir and Woodford Reserve? It’s tart but also sweet, sitting somewhere between dinner and dessert, which is how I suggest drinking it. $50
            </span>
          </p>
        </div>
        {/* <div className="tasting-section-title"></div>
        <div className="tasting-section-text3">
          <p>
            <span>
              Whether you and your friends consider yourselves to be casual
              connoisseurs or hardcore sommeliers-in-training, these wine party
              tasting ideas are sure to impress. No matter your budget, there’s
              an idea on this list for you. Even the simplest of touches like
              dessert pairings can add a little extra flair to your wine tasting
              event. Just don’t forget to serve snacks or appetizers! Assemble a
              charcuterie board or hit up the Trader Joe’s frozen section for
              some easy bite-sized snacks, and you’ll have everything you need
              for a chic wine tasting party.
            </span>
          </p>
        </div> */}
      </div>
      <div className="user-footer-content">
            <Footer />
          </div>
    </div>
  );
};
export default NewsContent;
