import React from "react";
import Select, { components } from "react-select";

const CustomOption = props => {
  const { data, innerRef, innerProps } = props;
  return data.custom ? (
    <div ref={innerRef} {...innerProps}>
      I'm a custom link
    </div>
  ) : (
    <components.Option {...props} />
  );
};
function StoreSelect(props) {
  // console.log(Object.keys(props.areaAllHaveStoreData));
  let optionsControl = Object.keys(props.areaAllHaveStoreData);
  // console.log(optionsControl);
  let newArray = [];
  let options = [
    { value: "0", label: "全島" },
    { value: "1", label: "基隆市" },
    { value: "2", label: "台北市" },
    { value: "3", label: "新北市" },
    { value: "4", label: "桃園市" },
    { value: "5", label: "新竹市" },
    { value: "6", label: "新竹縣" },
    { value: "7", label: "宜蘭縣" },
    { value: "8", label: "苗栗縣" },
    { value: "9", label: "台中市" },
    { value: "10", label: "彰化縣" },
    { value: "11", label: "南投縣" },
    { value: "12", label: "花蓮縣" },
    { value: "13", label: "雲林縣" },
    { value: "15", label: "嘉義縣" },
    { value: "16", label: "台南市" },
    { value: "17", label: "高雄市" },
    { value: "18", label: "台東市" },
    { value: "19", label: "屏東市" }
  ];

  newArray = options.filter(rows => {
    return optionsControl.some(rows2 => rows.value == rows2);
  });
  newArray.unshift({  value: 20, label: "全島" });

  return (
    <Select
      components={{ Option: CustomOption }}
      options={newArray}
      onChange={e =>{ 
        console.log(e.value)
        props.storeData(e.value)}}
    />
  );
}

export default StoreSelect;
