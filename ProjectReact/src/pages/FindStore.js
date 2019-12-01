import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../data/mapStyles";

// ICON import

import { MdPeopleOutline } from "react-icons/md";
import { MdChildCare } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { FaStore } from 'react-icons/fa';


// style scss
import "../common/scss/store/styleFindStore.scss";


function Map({
  selectedPark,
  setSelectedPark,
  storeData,
  defaultLng,
  defaultLat,
  defaultZoomMap,
  setDefaultZoomMap,
  setDefaultLat,
  setDefaultLng,
  setCrdUserPosition,
  crdUserPosition
}) {
  return (
    <GoogleMap
      // defaultZoom={8}
      defaultCenter={{ lat: 23.6, lng: 121 }}
      defaultOptions={{ styles: mapStyles }}
      zoom={defaultZoomMap}
      center={{ lat: defaultLat, lng: defaultLng }}
    >
      {crdUserPosition && (
        <Marker
          position={{
            lat: crdUserPosition.lat,
            lng: crdUserPosition.lng
          }} //定位
        />
      )}
      {storeData.map(store => (
        <Marker
          key={store.store_sid}
          position={{
            lat: parseFloat(store.store_latitude),
            lng: parseFloat(store.store_longitude)
          }} //定位
          onClick={() => {
            console.log(parseFloat(store.store_latitude));
            console.log(store.store_latitude);
            setDefaultLat(store.store_latitude);
            setDefaultLng(store.store_longitude);
            setDefaultZoomMap(25);
            setSelectedPark(store);
          }}
          icon={{
            url: `/image/store/${store.store_logo}`,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
          animation={{ animation: "DROP" }}
        />
      ))}
      {/* 點擊息提示 */}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            console.log(parseFloat(selectedPark.store_latitude * 1 + 10));
            setSelectedPark(null);
            setDefaultZoomMap(null);
          }}
          position={{
            lat: parseFloat(selectedPark.store_latitude * 1 + 0.00001),
            lng: parseFloat(selectedPark.store_longitude * 1)
          }}
        >
          <div style={{ padding: "30px" }}>
            1234567
            {/* <h2>{selectedPark.store_name}</h2>
            <p>{selectedPark.store_introduce}</p> */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
function FindStore(props) {
  console.log(navigator.geolocation);
  const [selectedPark, setSelectedPark] = useState(null);
  const [storeData, setStoreData] = useState([]);
  const [defaultLat, setDefaultLat] = useState(23.6);
  const [defaultLng, setDefaultLng] = useState(121);
  const [defaultZoomMap, setDefaultZoomMap] = useState(8);
  const [crdUserPosition, setCrdUserPosition] = useState("");

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  useEffect(() => {
    const allStoreData = async () => {
      const storeAllDataFirst = await fetch(
        "http://localhost:5000/handmade/store"
      );
      let storeAllDataJson = await storeAllDataFirst.json();
      setStoreData(storeAllDataJson);
    };
    allStoreData();
  }, []);
  console.log(storeData);

  //------------------------------------
  function nowPosition() {
    if (navigator.geolocation) {
      console.log("a");
      function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log("Latitude : " + crd.latitude);
        console.log("Longitude: " + crd.longitude);
        console.log("More or less " + crd.accuracy + " meters.");
        setDefaultLat(25.040741099999998);
        setDefaultLng(121.543399);
        setDefaultZoomMap(15);
        setCrdUserPosition({ lat: 25.040741099999998, lng: 121.543399 });
      }
      function error() {
        alert("無法取得你的位置");
      }
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Sorry, 你的裝置不支援地理位置功能。");
    }
  }
  //------------------------------------

  return (
    <>
      <div className="findStoreAll">
        <div className="findStoreLeft">
          <div className="findStoreLeftTop">
            <p className="findStoreLeftTopName">FIND</p>
          </div>
          <div className="findStoreLeftDown">
            <p className="findStoreLeftDownName">FIND</p>
          </div>
          <div className="findStoreCardGroup">
            <div className="findStoreCardButton">
              <div className="findStoreHere">
                <ul class="findStoreHereCheckbox list">
                  <li onClick={nowPosition} class="findStoreHereCheckboxItem findStoreHereCheckboxItem1">
                    <label class="number-item">
                      <input
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                      />
                      <span>
                        <MdGpsFixed />
                        目前位置
                    </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="findStoreButtonCheckbox">
                <ul class="findStoreCheckboxGroup list">
                  <li class="findStoreCheckboxItem findStoreCheckboxItem1">
                    <label class="number-item">
                      <input
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                      />
                      <span>
                        <MdPeopleOutline />
                        攜伴同行
                    </span>
                    </label>
                  </li>
                  <li class="findStoreCheckboxItem findStoreCheckboxItem2">
                    <label class="number-item">
                      <input
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                      />
                      <span>
                        <MdChildCare />
                        攜伴孩童
                    </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="findStoreCardGroupUl">
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
              <li className="findStoreCardGroupLi">
                <img className="findStoreSpacePhoto" src={`/image/store/chezsoiSpace.jpg`} />
                <div className="findStoreCardTop">
                  <div className="findStoreName">
                    <p>chez soi, a cooking house手繹</p>
                  </div>

                </div>
                <div className="findStoreCardDown">
                  <div className="findStoreCardDownMain">
                    <img className="findStoreLogoPhoto" src={`/image/store/chezsoiLogo.png`} />
                    <div className="findStoreIntroduce">
                      <p>chez soi 是法文「回到一個自在的家」之意，這是手繹的設計概念，也是我們想營造的空間氣息與生活質感。充滿獨特個性的陳設，真心溫暖的微笑問候，在這裡，人與食物之間的關係將更具生命力，揉捏的每個手作烘焙點心都有段溫暖的小故事，鍋鏟翻攪的盡是充滿人文滋味的料理，這裡有滿滿生命記憶的美味關係，個人歷程與當下生活的交織，我們真心想成為一間讓人每天都想去的廚藝空間。手繹融合了關於人的生活藝術與美學文化，以最貼近生活的美味食物與廚藝為媒介，用心地為您尋找生活中重要的幸福元素。手繹希望成為一處您可停下腳步，自由自在地分享、學習、創作和快樂的廚藝空間， 期待您來親手實作屬於自己的美味關係 !
                      </p>
                    </div>
                  </div>
                  <div className="findStoreEnterButton">
                    <a className="findStoreEnterStore" href={`/handmade/store/`}><FaStore /> GO TO Store</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="findStoreRight">
          <div className="findStoreRightTop"></div>
          <div className="findStoreGoogleMap">
            <div className="findStoreGoogleMapIn" style={{ width: "100wh", height: "calc( 100vh - 60px )" }}>
              <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBFbHL-7A0VFRRARWIQCNJsE2HXq53z1g`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                selectedPark={selectedPark}
                setSelectedPark={setSelectedPark}
                storeData={storeData}
                setStoreData={setStoreData}
                defaultLat={defaultLat}
                defaultLng={defaultLng}
                defaultZoomMap={defaultZoomMap}
                setDefaultLat={setDefaultLat}
                setDefaultLng={setDefaultLng}
                setDefaultZoomMap={setDefaultZoomMap}
                setCrdUserPosition={setCrdUserPosition}
                crdUserPosition={crdUserPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindStore;
