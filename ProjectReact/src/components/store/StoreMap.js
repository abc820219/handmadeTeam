import React, { useEffect, useState } from "react";

const SvgComponent = props => {
  // console.log(props);
  const setAreaNowName = props.setAreaNowName;
  const storeDataLoad = props.storeDataLoad;

  const [locateClick, setLocateClick] = useState(0);
  function areaNow(e) {
    let value = e.target.getAttribute("mapValue");
    let valueClick = e.target.getAttribute("values");
    // console.log(value); // 傳 hover 後的值
    setAreaNowName(valueClick);
  }

  const setAreaNowCatch = props.setAreaNowCatch;

  const areaHaveStore = props.areaHaveStore;

  const areaAllHaveStoreData = props.areaAllHaveStoreData;

  // const getAreaClick = props.getAreaClick;

  const storeData = props.storeData;

  function areaNoStore(areaHaveStore) {
    // console.log(areaHaveStore); // 地區有店家
    let areaNumber = document.querySelectorAll(".taiwanMap path");
    // console.log(areaNumber) // 地區號碼
    //const elements = []
    areaNumber.forEach(element => {
      // elements.push(element)
      if (areaHaveStore[element.getAttribute("mapValue")]) {
        let areaStoreMapValue = element.getAttribute("mapValue");
        // console.log(element); //有店家
        element.addEventListener("click", () => {
          storeData(areaStoreMapValue);
        });
      } else {
        // console.log(element); //沒店家
        // element.classList.add('areaNoHaveStore');
        // element.classList.remove('prefix__storeCountry');
      }
    });

    // console.log('elemenets length', elements.length)
  }

  function areaNoStoreData(areaAllHaveStoreData) {
    // console.log(areaHaveStore); // 地區有店家
    let areaNumberData = document.querySelectorAll(".taiwanMap path");
    // console.log(areaNumber) // 地區號碼
    areaNumberData.forEach(element => {
      // console.log(element);
      // console.log(element.getAttribute("mapValue"));
      // console.log(areaHaveStore[element.getAttribute("mapValue")]);
      if (areaAllHaveStoreData[element.getAttribute("mapValue")]) {
        element.classList.add("prefix__storeCountry");
        element.classList.remove("areaNoHaveStore");
      } else {
        element.classList.add("areaNoHaveStore");
        element.classList.remove("prefix__storeCountry");
      }
    });
  }

  useEffect(() => {
    // console.log( document.querySelector('.taiwanMap path').attributes ); // 抓台灣地圖 PATH
    areaNoStore(areaHaveStore);
  });

  useEffect(() => {
    areaNoStoreData(areaAllHaveStoreData);
  });

  return (
    <svg
      className="taiwanMap"
      onMouseLeave={() => setAreaNowName("全島")}
      viewBox="0 0 566.9 850.4"
      {...props}
      onClick={() => {
        storeData();
      }}
    >
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 11
            ? "prefix__st0  prefix__storeCountry nantouMap fillBackGround"
            : "prefix__st0  prefix__storeCountry nantouMap"
        }
        mapValue="11"
        values="南投縣"
        d="M188.1 414.2v-85.6l50.3-28.8L360 269.6v30.9l-29 119.1-46.4 44.3z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 12
            ? "prefix__st1 prefix__storeCountry hualienMap fillBackGround"
            : "prefix__st1 prefix__storeCountry hualienMap"
        }
        values="花蓮縣"
        mapValue="12"
        d="M342.2 544.4L291.8 499 281 466.5l4.4 2.3 49.5-47.3 29.3-120.6v-33.2l25.3-27.7 83.1 11.7-46.5 86.3-29.3 126.1-17.3-3.3-24.1 83.6z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 9
            ? "prefix__st2 prefix__storeCountry taichungMap fillBackGround"
            : "prefix__st2 prefix__storeCountry taichungMap"
        }
        values="台中市"
        mapValue="9"
        d="M154.4 277.1l35.3-58.8 22.4 33.8 45.3 3.1 2.7-9.5 16.5.6 11.5 9.2 68.1-38.3 13.3 21.4 13.3-4.6 2.4 4.7-24.3 26.6-124.3 30.9-39.9 22.9z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 10
            ? "prefix__st1 prefix__storeCountry changhuaMap fillBackGround"
            : "prefix__st1 prefix__storeCountry changhuaMap"
        }
        values="彰化縣"
        mapValue="10"
        d="M94 363.4l22.8-47.4 18.1-1.2 18-33.3 40.1 39.7-9.2 5.2v47.8z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 13
            ? "prefix__st2 prefix__storeCountry yunlinMap fillBackGround"
            : "prefix__st2 prefix__storeCountry yunlinMap"
        }
        values="雲林縣"
        mapValue="13"
        d="M73.7 441.3l-6.3-25.1 25-49.1 91.4 11v38.4l23.9 12.3-43.6-4-8.1-11.1-28.4 1.4-48.2 30.8z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 15
            ? "prefix__st1 prefix__storeCountry chiayiMap fillBackGround"
            : "prefix__st1 prefix__storeCountry chiayiMap"
        }
        values="嘉義縣"
        mapValue="15"
        d="M161.2 510.2l10.4-24.5-43.6-21.5-45 34.1-23.3-5 2.5-43.7 9.3-4.9 7.5 6.2 50-32 24.8-1.2 7.9 10.8 55.2 5 39.9 20.5-44.5 40.7-24.3 2.7 1.8 17.6z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 17
            ? "prefix__st2 prefix__storeCountry kaohsiungMap fillBackGround"
            : "prefix__st2 prefix__storeCountry kaohsiungMap"
        }
        values="高雄市"
        mapValue="17"
        d="M96.1 646l-18.7-56 49.6-.5 56.7-41.9 10.6-30-1.7-16.7 21.7-2.5 46.3-42.4 15.1 7.8 12.4 37.3.2.2-57.8 79.5 16.6 25v4.8l-99.2-2.2-14 86.3z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 16
            ? "prefix__st0 prefix__storeCountry tainanMap fillBackGround"
            : "prefix__st0 prefix__storeCountry tainanMap"
        }
        onClick={() => setLocateClick(16)}
        values="台南市"
        mapValue="16"
        d="M47.1 530.5l10.5-33.6 26.5 5.6 44.4-33.6 37.8 18.6-10.9 25.7 34 5.7-9.4 26.3-54.5 40.4-48.6.5z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 18
            ? "prefix__st0 prefix__storeCountry taitungMap fillBackGround"
            : "prefix__st0 prefix__storeCountry taitungMap"
        }
        values="台東縣"
        mapValue="18"
        d="M210.2 679.5l41.2-66.4v-8.4l-15.9-23.8 55.9-76.9 49 44.3h18.2l23.9-82.9 13.1 2.5L347.5 587l-70.8 70.1L251 757.5l-14.9 2.3z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 19
            ? "prefix__st1 prefix__storeCountry pingtungMap fillBackGround"
            : "prefix__st1 prefix__storeCountry pingtungMap"
        }
        values="屏東縣"
        mapValue="19"
        d="M218.4 823.4l-8.6 11.4L185 732.7l-47.5-33.8 14.1-86.5 94 2-40 64.6 27.4 85.3 18.4-2.9-6.2 78.7z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 8
            ? "prefix__st1 prefix__storeCountry miaoliMap fillBackGround"
            : "prefix__st1 prefix__storeCountry miaoliMap"
        }
        values="苗栗縣"
        mapValue="8"
        d="M214.6 248.4l-22.5-33.9 52.6-64.4 25.8 2.4 31.1 43.8 39.3 24.9-52.4 29.5-10.2-8.3-21.4-.8-2.7 9.4z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 5
            ? "prefix__st2 prefix__storeCountry hsinchu_1Map fillBackGround"
            : "prefix__st2 prefix__storeCountry hsinchu_1Map"
        }
        onClick={() => setLocateClick(5)}
        values="新竹市"
        mapValue="5"
        d="M247 146.4l15.8-27.4 24.5 13-21.4 16.2z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        className={
          locateClick === 6
            ? "prefix__st0 prefix__storeCountry hsinchu_2Map fillBackGround"
            : "prefix__st0 prefix__storeCountry hsinchu_2Map"
        }
        values="新竹縣"
        mapValue="6"
        d="M304.7 193.5l-31.8-44.7-1-.1 22.9-17.2-30.1-16 8.3-16.3h22.9l82.4 85-19.7 28.8-.8-1.3-12.9 7.3z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        values="台北市"
        mapValue="2"
        className={
          locateClick === 2
            ? "prefix__st1 prefix__storeCountry taipeiMap fillBackGround"
            : "prefix__st1 prefix__storeCountry taipeiMap"
        }
        onClick={() => setLocateClick(2)}
        d="M390.4 54.1l24.1-23.4 21.1 43.2-9.6 12.8-10.2 2z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        values="新北市"
        mapValue="3"
        className={
          locateClick === 3
            ? "prefix__st0 prefix__storeCountry newTaipeiMap fillBackGround"
            : "prefix__st0 prefix__storeCountry newTaipeiMap"
        }
        onClick={() => setLocateClick(3)}
        d="M357 132.1l-22.7-78.8 36-13.4 13.1 6.3-4.7-15L393 10.3l32.7 1.2 30.5 25.2-24.2 5.8 12 30.2 54.9-22.4 21 29-40.5 9.8-54.7 55.1-32.4 12.4-35.3-24.5zm28-78.4l28.9 39.4 14.7-2.9 11.9-15.9-24.6-50.5L385 53.7z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        values="基隆市"
        mapValue="1"
        className={
          locateClick === 1
            ? "prefix__st2 prefix__storeCountry keelungMap fillBackGround"
            : "prefix__st2 prefix__storeCountry keelungMap"
        }
        d="M437.6 45.2l22.9-5.5 32.9 8.6-47 19.2z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        values="宜蘭縣"
        mapValue="7"
        className={
          locateClick === 7
            ? "prefix__st3 prefix__storeCountry yilanMap fillBackGround"
            : "prefix__st3 prefix__storeCountry yilanMap"
        }
        d="M388.5 235.9l-3.4-6.8-13.7 4.7-10.5-16.9 22-32 10.6-24.5 33.6-12.8 54.5-55 35.9-8.7-44.1 50.1 20.5 45.3-28.5 67.5z"
      />
      <path
        onMouseEnter={event => areaNow(event)}
        values="桃園市"
        mapValue="4"
        className={
          locateClick === 4
            ? "prefix__st2 prefix__storeCountry taoyuanMap fillBackGround"
            : "prefix__st2 prefix__storeCountry taoyuanMap"
        }
        onClick={() => setLocateClick(4)}
        d="M297.8 95.3h-23.5l6.2-28.6L329.8 53l23.4 81.4 36.1 25.2-9 20.8z"
      />
    </svg>
  );
};

export default SvgComponent;
