import React from "react";
import './css/Metabase.css';
import { Center } from "@chakra-ui/react";
// you will need to install via 'npm install jsonwebtoken' or in your package.json

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://noctua-metabase.herokuapp.com";
var METABASE_SECRET_KEY = "32a669105e89d84872273f6d135566dff4a3c13942b23cc53960efd5bb20ecf7";

var payload = {
  resource: { dashboard: 1 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=night&bordered=true&titled=true";

const MetabaseReport = () => {
    return (
    <Center marginTop='3rem'>
        <iframe
        title = "Dashboard Gastos dos deputados"
    src={iframeUrl}
    width='1250rem'
    height={600}
    allowTransparency
/>
</Center>);
}
export default MetabaseReport;