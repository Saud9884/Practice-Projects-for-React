import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import QrCodeGenerator from "../qr-code-generator";
import RandomColor from "../random-color";
import { featureFlagContext } from "./context";

export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(featureFlagContext);

  const componentsToRender = [
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    {
      key: "showQrGenerator",
      component: <QrCodeGenerator />,
    },
    {
      key: "shoeLightdark",
      component: <LightDarkMode />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) {
    return <h1>Loading Data...</h1>;
  }
  return (
    <div>
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
