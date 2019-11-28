import React, { useState } from "react";
import { useAlert } from "react-alert";
function FindStore() {
  const alert = useAlert();
  useState(() => {
    alert.show("Oh look, an alert!");
  }, []);
  return <> FindStore</>;
}

export default FindStore;
