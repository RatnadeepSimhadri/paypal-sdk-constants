!function(E,N){"object"==typeof exports&&"object"==typeof module?module.exports=N():"function"==typeof define&&define.amd?define("ppsdkconstants",[],N):"object"==typeof exports?exports.ppsdkconstants=N():E.ppsdkconstants=N()}("undefined"!=typeof self?self:this,(function(){return function(E){var N={};function S(R){if(N[R])return N[R].exports;var t=N[R]={i:R,l:!1,exports:{}};return E[R].call(t.exports,t,t.exports,S),t.l=!0,t.exports}return S.m=E,S.c=N,S.d=function(E,N,R){S.o(E,N)||Object.defineProperty(E,N,{enumerable:!0,get:R})},S.r=function(E){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},S.t=function(E,N){if(1&N&&(E=S(E)),8&N)return E;if(4&N&&"object"==typeof E&&E&&E.__esModule)return E;var R=Object.create(null);if(S.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:E}),2&N&&"string"!=typeof E)for(var t in E)S.d(R,t,function(N){return E[N]}.bind(null,t));return R},S.n=function(E){var N=E&&E.__esModule?function(){return E.default}:function(){return E};return S.d(N,"a",N),N},S.o=function(E,N){return{}.hasOwnProperty.call(E,N)},S.p="",S(S.s=0)}([function(E,N,S){"use strict";S.r(N),S.d(N,"COUNTRY",(function(){return R})),S.d(N,"LANG",(function(){return t})),S.d(N,"COUNTRY_LANGS",(function(){return T})),S.d(N,"SDK_PATH",(function(){return e})),S.d(N,"SDK_SETTINGS",(function(){return n})),S.d(N,"SDK_QUERY_KEYS",(function(){return A})),S.d(N,"COMPONENTS",(function(){return F})),S.d(N,"DEBUG",(function(){return r})),S.d(N,"QUERY_BOOL",(function(){return H})),S.d(N,"UNKNOWN",(function(){return D})),S.d(N,"PROTOCOL",(function(){return _})),S.d(N,"PAGE_TYPES",(function(){return o})),S.d(N,"MERCHANT_ID_MAX",(function(){return I})),S.d(N,"ENV",(function(){return Z})),S.d(N,"FPTI_KEY",(function(){return M})),S.d(N,"FPTI_USER_ACTION",(function(){return O})),S.d(N,"FPTI_DATA_SOURCE",(function(){return i})),S.d(N,"FPTI_FEED",(function(){return C})),S.d(N,"FPTI_SDK_NAME",(function(){return u})),S.d(N,"INTENT",(function(){return a})),S.d(N,"COMMIT",(function(){return L})),S.d(N,"VAULT",(function(){return P})),S.d(N,"CURRENCY",(function(){return d})),S.d(N,"PLATFORM",(function(){return U})),S.d(N,"FUNDING",(function(){return c})),S.d(N,"FUNDING_BRAND_LABEL",(function(){return G})),S.d(N,"CARD",(function(){return B})),S.d(N,"WALLET_INSTRUMENT",(function(){return s})),S.d(N,"FUNDING_PRODUCTS",(function(){return K})),S.d(N,"DEFAULT_COUNTRY",(function(){return f})),S.d(N,"DEFAULT_CURRENCY",(function(){return l})),S.d(N,"DEFAULT_INTENT",(function(){return p})),S.d(N,"DEFAULT_COMMIT",(function(){return Y})),S.d(N,"DEFAULT_SALE_COMMIT",(function(){return V})),S.d(N,"DEFAULT_NONSALE_COMMIT",(function(){return m})),S.d(N,"DEFAULT_VAULT",(function(){return b})),S.d(N,"DEFAULT_COMPONENTS",(function(){return W})),S.d(N,"DEFAULT_DEBUG",(function(){return y})),S.d(N,"TYPES",(function(){return J}));var R={AD:"AD",AE:"AE",AG:"AG",AI:"AI",AL:"AL",AM:"AM",AN:"AN",AO:"AO",AR:"AR",AT:"AT",AU:"AU",AW:"AW",AZ:"AZ",BA:"BA",BB:"BB",BE:"BE",BF:"BF",BG:"BG",BH:"BH",BI:"BI",BJ:"BJ",BM:"BM",BN:"BN",BO:"BO",BR:"BR",BS:"BS",BT:"BT",BW:"BW",BY:"BY",BZ:"BZ",CA:"CA",CD:"CD",CG:"CG",CH:"CH",CI:"CI",CK:"CK",CL:"CL",CM:"CM",CN:"CN",CO:"CO",CR:"CR",CV:"CV",CY:"CY",CZ:"CZ",DE:"DE",DJ:"DJ",DK:"DK",DM:"DM",DO:"DO",DZ:"DZ",EC:"EC",EE:"EE",EG:"EG",ER:"ER",ES:"ES",ET:"ET",FI:"FI",FJ:"FJ",FK:"FK",FM:"FM",FO:"FO",FR:"FR",GA:"GA",GB:"GB",GD:"GD",GE:"GE",GF:"GF",GI:"GI",GL:"GL",GM:"GM",GN:"GN",GP:"GP",GR:"GR",GT:"GT",GW:"GW",GY:"GY",HK:"HK",HN:"HN",HR:"HR",HU:"HU",ID:"ID",IE:"IE",IL:"IL",IN:"IN",IS:"IS",IT:"IT",JM:"JM",JO:"JO",JP:"JP",KE:"KE",KG:"KG",KH:"KH",KI:"KI",KM:"KM",KN:"KN",KR:"KR",KW:"KW",KY:"KY",KZ:"KZ",LA:"LA",LC:"LC",LI:"LI",LK:"LK",LS:"LS",LT:"LT",LU:"LU",LV:"LV",MA:"MA",MC:"MC",MD:"MD",ME:"ME",MG:"MG",MH:"MH",MK:"MK",ML:"ML",MN:"MN",MQ:"MQ",MR:"MR",MS:"MS",MT:"MT",MU:"MU",MV:"MV",MW:"MW",MX:"MX",MY:"MY",MZ:"MZ",NA:"NA",NC:"NC",NE:"NE",NF:"NF",NG:"NG",NI:"NI",NL:"NL",NO:"NO",NP:"NP",NR:"NR",NU:"NU",NZ:"NZ",OM:"OM",PA:"PA",PE:"PE",PF:"PF",PG:"PG",PH:"PH",PL:"PL",PM:"PM",PN:"PN",PT:"PT",PW:"PW",PY:"PY",QA:"QA",RE:"RE",RO:"RO",RS:"RS",RU:"RU",RW:"RW",SA:"SA",SB:"SB",SC:"SC",SE:"SE",SG:"SG",SH:"SH",SI:"SI",SJ:"SJ",SK:"SK",SL:"SL",SM:"SM",SN:"SN",SO:"SO",SR:"SR",ST:"ST",SV:"SV",SZ:"SZ",TC:"TC",TD:"TD",TG:"TG",TH:"TH",TJ:"TJ",TM:"TM",TN:"TN",TO:"TO",TR:"TR",TT:"TT",TV:"TV",TW:"TW",TZ:"TZ",UA:"UA",UG:"UG",US:"US",UY:"UY",VA:"VA",VC:"VC",VE:"VE",VG:"VG",VN:"VN",VU:"VU",WF:"WF",WS:"WS",YE:"YE",YT:"YT",ZA:"ZA",ZM:"ZM",ZW:"ZW"},t={AR:"ar",BG:"bg",CS:"cs",DA:"da",DE:"de",EL:"el",EN:"en",ES:"es",ET:"et",FI:"fi",FR:"fr",HE:"he",HU:"hu",ID:"id",IT:"it",JA:"ja",KO:"ko",LT:"lt",LV:"lv",MS:"ms",NL:"nl",NO:"no",PL:"pl",PT:"pt",RO:"ro",RU:"ru",SK:"sk",SL:"sl",SV:"sv",TH:"th",TL:"tl",TR:"tr",VI:"vi",ZH:"zh"},T={AD:[t.EN,t.FR,t.ES,t.ZH],AE:[t.EN,t.FR,t.ES,t.ZH,t.AR],AG:[t.EN,t.FR,t.ES,t.ZH],AI:[t.EN,t.FR,t.ES,t.ZH],AL:[t.EN],AM:[t.EN,t.FR,t.ES,t.ZH],AN:[t.EN,t.FR,t.ES,t.ZH],AO:[t.EN,t.FR,t.ES,t.ZH],AR:[t.ES,t.EN],AT:[t.DE,t.EN],AU:[t.EN],AW:[t.EN,t.FR,t.ES,t.ZH],AZ:[t.EN,t.FR,t.ES,t.ZH],BA:[t.EN],BB:[t.EN,t.FR,t.ES,t.ZH],BE:[t.EN,t.NL,t.FR],BF:[t.FR,t.EN,t.ES,t.ZH],BG:[t.BG,t.EN],BH:[t.AR,t.EN,t.FR,t.ES,t.ZH],BI:[t.FR,t.EN,t.ES,t.ZH],BJ:[t.FR,t.EN,t.ES,t.ZH],BM:[t.EN,t.FR,t.ES,t.ZH],BN:[t.MS,t.EN],BO:[t.ES,t.EN,t.FR,t.ZH],BR:[t.PT,t.EN],BS:[t.EN,t.FR,t.ES,t.ZH],BT:[t.EN],BW:[t.EN,t.FR,t.ES,t.ZH],BY:[t.EN],BZ:[t.EN,t.ES,t.FR,t.ZH],CA:[t.EN,t.FR],CD:[t.FR,t.EN,t.ES,t.ZH],CG:[t.EN,t.FR,t.ES,t.ZH],CH:[t.DE,t.FR,t.EN],CI:[t.FR,t.EN],CK:[t.EN,t.FR,t.ES,t.ZH],CL:[t.ES,t.EN,t.FR,t.ZH],CM:[t.FR,t.EN],CN:[t.ZH],CO:[t.ES,t.EN,t.FR,t.ZH],CR:[t.ES,t.EN,t.FR,t.ZH],CV:[t.EN,t.FR,t.ES,t.ZH],CY:[t.EN],CZ:[t.CS,t.EN,t.FR,t.ES,t.ZH],DE:[t.DE,t.EN],DJ:[t.FR,t.EN,t.ES,t.ZH],DK:[t.DA,t.EN],DM:[t.EN,t.FR,t.ES,t.ZH],DO:[t.ES,t.EN,t.FR,t.ZH],DZ:[t.AR,t.EN,t.FR,t.ES,t.ZH],EC:[t.ES,t.EN,t.FR,t.ZH],EE:[t.ET,t.EN,t.RU,t.FR,t.ES,t.ZH],EG:[t.AR,t.EN,t.FR,t.ES,t.ZH],ER:[t.EN,t.FR,t.ES,t.ZH],ES:[t.ES,t.EN],ET:[t.EN,t.FR,t.ES,t.ZH],FI:[t.FI,t.EN,t.FR,t.ES,t.ZH],FJ:[t.EN,t.FR,t.ES,t.ZH],FK:[t.EN,t.FR,t.ES,t.ZH],FM:[t.EN],FO:[t.DA,t.EN,t.FR,t.ES,t.ZH],FR:[t.FR,t.EN],GA:[t.FR,t.EN,t.ES,t.ZH],GB:[t.EN],GD:[t.EN,t.FR,t.ES,t.ZH],GE:[t.EN,t.FR,t.ES,t.ZH],GF:[t.EN,t.FR,t.ES,t.ZH],GI:[t.EN,t.FR,t.ES,t.ZH],GL:[t.DA,t.EN,t.FR,t.ES,t.ZH],GM:[t.EN,t.FR,t.ES,t.ZH],GN:[t.FR,t.EN,t.ES,t.ZH],GP:[t.EN,t.FR,t.ES,t.ZH],GR:[t.EL,t.EN,t.FR,t.ES,t.ZH],GT:[t.ES,t.EN,t.FR,t.ZH],GW:[t.EN,t.FR,t.ES,t.ZH],GY:[t.EN,t.FR,t.ES,t.ZH],HK:[t.EN,t.ZH],HN:[t.ES,t.EN,t.FR,t.ZH],HR:[t.EN],HU:[t.HU,t.EN,t.FR,t.ES,t.ZH],ID:[t.ID,t.EN],IE:[t.EN,t.FR,t.ES,t.ZH],IL:[t.HE,t.EN],IN:[t.EN],IS:[t.EN],IT:[t.IT,t.EN],JM:[t.EN,t.ES,t.FR,t.ZH],JO:[t.AR,t.EN,t.FR,t.ES,t.ZH],JP:[t.JA,t.EN],KE:[t.EN,t.FR,t.ES,t.ZH],KG:[t.EN,t.FR,t.ES,t.ZH],KH:[t.EN],KI:[t.EN,t.FR,t.ES,t.ZH],KM:[t.FR,t.EN,t.ES,t.ZH],KN:[t.EN,t.FR,t.ES,t.ZH],KR:[t.KO,t.EN],KW:[t.AR,t.EN,t.FR,t.ES,t.ZH],KY:[t.EN,t.FR,t.ES,t.ZH],KZ:[t.EN,t.FR,t.ES,t.ZH],LA:[t.EN],LC:[t.EN,t.FR,t.ES,t.ZH],LI:[t.EN,t.FR,t.ES,t.ZH],LK:[t.EN],LS:[t.EN,t.FR,t.ES,t.ZH],LT:[t.LT,t.EN,t.RU,t.FR,t.ES,t.ZH],LU:[t.EN,t.DE,t.FR,t.ES,t.ZH],LV:[t.LV,t.EN,t.RU,t.FR,t.ES,t.ZH],MA:[t.AR,t.EN,t.FR,t.ES,t.ZH],MC:[t.FR,t.EN],MD:[t.EN],ME:[t.EN],MG:[t.EN,t.FR,t.ES,t.ZH],MH:[t.EN,t.FR,t.ES,t.ZH],MK:[t.EN],ML:[t.FR,t.EN,t.ES,t.ZH],MN:[t.EN],MQ:[t.EN,t.FR,t.ES,t.ZH],MR:[t.EN,t.FR,t.ES,t.ZH],MS:[t.EN,t.FR,t.ES,t.ZH],MT:[t.EN],MU:[t.EN,t.FR,t.ES,t.ZH],MV:[t.EN],MW:[t.EN,t.FR,t.ES,t.ZH],MX:[t.ES,t.EN],MY:[t.MS,t.EN],MZ:[t.EN,t.FR,t.ES,t.ZH],NA:[t.EN,t.FR,t.ES,t.ZH],NC:[t.EN,t.FR,t.ES,t.ZH],NE:[t.FR,t.EN,t.ES,t.ZH],NF:[t.EN,t.FR,t.ES,t.ZH],NG:[t.EN],NI:[t.ES,t.EN,t.FR,t.ZH],NL:[t.NL,t.EN],NO:[t.NO,t.EN],NP:[t.EN],NR:[t.EN,t.FR,t.ES,t.ZH],NU:[t.EN,t.FR,t.ES,t.ZH],NZ:[t.EN,t.FR,t.ES,t.ZH],OM:[t.AR,t.EN,t.FR,t.ES,t.ZH],PA:[t.ES,t.EN,t.FR,t.ZH],PE:[t.ES,t.EN,t.FR,t.ZH],PF:[t.EN,t.FR,t.ES,t.ZH],PG:[t.EN,t.FR,t.ES,t.ZH],PH:[t.TL,t.EN],PL:[t.PL,t.EN],PM:[t.EN,t.FR,t.ES,t.ZH],PN:[t.EN,t.FR,t.ES,t.ZH],PT:[t.PT,t.EN],PW:[t.EN,t.FR,t.ES,t.ZH],PY:[t.ES,t.EN],QA:[t.EN,t.FR,t.ES,t.ZH,t.AR],RE:[t.EN,t.FR,t.ES,t.ZH],RO:[t.RO,t.EN,t.FR,t.ES,t.ZH],RS:[t.EN,t.FR,t.ES,t.ZH],RU:[t.RU,t.EN],RW:[t.FR,t.EN,t.ES,t.ZH],SA:[t.AR,t.EN,t.FR,t.ES,t.ZH],SB:[t.EN,t.FR,t.ES,t.ZH],SC:[t.FR,t.EN,t.ES,t.ZH],SE:[t.SV,t.EN],SG:[t.EN],SH:[t.EN,t.FR,t.ES,t.ZH],SI:[t.SL,t.EN,t.FR,t.ES,t.ZH],SJ:[t.EN,t.FR,t.ES,t.ZH],SK:[t.SK,t.EN,t.FR,t.ES,t.ZH],SL:[t.EN,t.FR,t.ES,t.ZH],SM:[t.EN,t.FR,t.ES,t.ZH],SN:[t.FR,t.EN,t.ES,t.ZH],SO:[t.EN,t.FR,t.ES,t.ZH],SR:[t.EN,t.FR,t.ES,t.ZH],ST:[t.EN,t.FR,t.ES,t.ZH],SV:[t.ES,t.EN,t.FR,t.ZH],SZ:[t.EN,t.FR,t.ES,t.ZH],TC:[t.EN,t.FR,t.ES,t.ZH],TD:[t.FR,t.EN,t.ES,t.ZH],TG:[t.FR,t.EN,t.ES,t.ZH],TH:[t.TH,t.EN],TJ:[t.EN,t.FR,t.ES,t.ZH],TM:[t.EN,t.FR,t.ES,t.ZH],TN:[t.AR,t.EN,t.FR,t.ES,t.ZH],TO:[t.EN],TR:[t.TR,t.EN],TT:[t.EN,t.FR,t.ES,t.ZH],TV:[t.EN,t.FR,t.ES,t.ZH],TW:[t.ZH,t.EN],TZ:[t.EN,t.FR,t.ES,t.ZH],UA:[t.EN,t.RU,t.FR,t.ES,t.ZH],UG:[t.EN,t.FR,t.ES,t.ZH],US:[t.EN,t.FR,t.ES,t.ZH],UY:[t.ES,t.EN,t.FR,t.ZH],VA:[t.EN,t.FR,t.ES,t.ZH],VC:[t.EN,t.FR,t.ES,t.ZH],VE:[t.ES,t.EN,t.FR,t.ZH],VG:[t.EN,t.FR,t.ES,t.ZH],VN:[t.VI,t.EN],VU:[t.EN,t.FR,t.ES,t.ZH],WF:[t.EN,t.FR,t.ES,t.ZH],WS:[t.EN],YE:[t.AR,t.EN,t.FR,t.ES,t.ZH],YT:[t.EN,t.FR,t.ES,t.ZH],ZA:[t.EN,t.FR,t.ES,t.ZH],ZM:[t.EN,t.FR,t.ES,t.ZH],ZW:[t.EN]},e="/sdk/js",n={NAMESPACE:"data-namespace",CLIENT_TOKEN:"data-client-token",MERCHANT_ID:"data-merchant-id",PARTNER_ATTRIBUTION_ID:"data-partner-attribution-id",STAGE_HOST:"data-stage-host",API_STAGE_HOST:"data-api-stage-host",CSP_NONCE:"data-csp-nonce",ENABLE_3DS:"data-enable-3ds",SDK_INTEGRATION_SOURCE:"data-sdk-integration-source",USER_ID_TOKEN:"data-user-id-token",AMOUNT:"data-amount",CLIENT_METADATA_ID:"data-client-metadata-id",PAGE_TYPE:"data-page-type"},A={COMPONENTS:"components",ENV:"env",DEBUG:"debug",CACHEBUST:"cachebust",CLIENT_ID:"client-id",MERCHANT_ID:"merchant-id",LOCALE:"locale",CURRENCY:"currency",INTENT:"intent",COMMIT:"commit",VAULT:"vault",BUYER_COUNTRY:"buyer-country",ENABLE_FUNDING:"enable-funding",DISABLE_FUNDING:"disable-funding",DISABLE_CARD:"disable-card",INTEGRATION_DATE:"integration-date",STAGE_HOST:"stage-host"},F={BUTTONS:"buttons",HOSTED_FIELDS:"hosted-fields"},r={TRUE:!0,FALSE:!1},H={TRUE:"true",FALSE:"false"},D="unknown",_={HTTP:"http",HTTPS:"https"},o={HOME:"home",PRODUCT:"product",CART:"cart",CHECKOUT:"checkout",PRODUCT_LISTING:"product-listing",SEARCH_RESULTS:"search-results",PRODUCT_DETAILS:"product-details",MINI_CART:"mini-cart"},I=10,Z={LOCAL:"local",STAGE:"stage",SANDBOX:"sandbox",PRODUCTION:"production",TEST:"test"},M={FEED:"feed_name",STATE:"state_name",TRANSITION:"transition_name",BUTTON_TYPE:"button_type",SESSION_UID:"page_session_id",BUTTON_SESSION_UID:"button_session_id",TOKEN:"token",CONTEXT_ID:"context_id",CONTEXT_TYPE:"context_type",REFERER:"referer_url",MERCHANT_DOMAIN:"merchant_domain",PAY_ID:"pay_id",SELLER_ID:"seller_id",CLIENT_ID:"client_id",DATA_SOURCE:"serverside_data_source",BUTTON_SOURCE:"button_source",ERROR_CODE:"ext_error_code",ERROR_DESC:"ext_error_desc",PAGE_LOAD_TIME:"page_load_time",EXPERIMENT_NAME:"pxp_exp_id",TREATMENT_NAME:"pxp_trtmnt_id",TRANSITION_TIME:"transition_time",FUNDING_LIST:"eligible_payment_methods",FUNDING_COUNT:"eligible_payment_count",CHOSEN_FUNDING:"selected_payment_method",BUTTON_LAYOUT:"button_layout",VERSION:"checkoutjs_version",LOCALE:"locale",BUYER_COUNTRY:"buyer_cntry",INTEGRATION_IDENTIFIER:"integration_identifier",PARTNER_ATTRIBUTION_ID:"bn_code",PAGE_TYPE:"pp_placement",SDK_NAME:"sdk_name",SDK_VERSION:"sdk_version",MOBILE_APP_VERSION:"mobile_app_version",MOBILE_BUNDLE_IDENTIFIER:"mapv",USER_AGENT:"user_agent",USER_ACTION:"user_action",CONTEXT_CORRID:"context_correlation_id",SDK_CACHE:"sdk_cache",SDK_LOAD_TIME:"sdk_load_time",IS_VAULT:"is_vault",DISABLE_FUNDING:"disable_funding",DISABLE_CARD:"disable_card",RESPONSE_DURATION:"response_duration",SDK_INTEGRATION_SOURCE:"sdk_integration_source",PAYMENT_FLOW:"payment_flow",BUTTON_VERSION:"button_version",FI_LIST:"fi_list",CHOSEN_FI_TYPE:"chosen_fi_type",SELECTED_FI:"merchant_selected_funding_source",POTENTIAL_PAYMENT_METHODS:"potential_payment_methods",PAY_NOW:"pay_now",STICKINESS_ID:"stickiness_id",TIMESTAMP:"t"},O={COMMIT:"commit",CONTINUE:"continue"},i={PAYMENTS_SDK:"checkout"},C={PAYMENTS_SDK:"payments_sdk"},u={PAYMENTS_SDK:"payments_sdk"},a={CAPTURE:"capture",AUTHORIZE:"authorize",ORDER:"order",TOKENIZE:"tokenize",SUBSCRIPTION:"subscription"},L={TRUE:!0,FALSE:!1},P={TRUE:!0,FALSE:!1},d={AED:"AED",ALL:"ALL",ANG:"ANG",AOA:"AOA",AUD:"AUD",AWG:"AWG",BAM:"BAM",BBD:"BBD",BGN:"BGN",BIF:"BIF",BMD:"BMD",BND:"BND",BOB:"BOB",BRL:"BRL",BSD:"BSD",BTN:"BTN",CAD:"CAD",CDF:"CDF",CHF:"CHF",CLP:"CLP",COP:"COP",CRC:"CRC",CVE:"CVE",CZK:"CZK",DJF:"DJF",DKK:"DKK",DOP:"DOP",DZD:"DZD",EGP:"EGP",ETB:"ETB",EUR:"EUR",FJD:"FJD",FKP:"FKP",GBP:"GBP",GIP:"GIP",GMD:"GMD",GNF:"GNF",GTQ:"GTQ",GYD:"GYD",HKD:"HKD",HNL:"HNL",HRK:"HRK",HUF:"HUF",IDR:"IDR",ILS:"ILS",INR:"INR",ISK:"ISK",JMD:"JMD",JPY:"JPY",KES:"KES",KMF:"KMF",KRW:"KRW",KYD:"KYD",LAK:"LAK",LKR:"LKR",MDL:"MDL",MGA:"MGA",MKD:"MKD",MNT:"MNT",MRO:"MRO",MUR:"MUR",MVR:"MVR",MXN:"MXN",MYR:"MYR",NAD:"NAD",NIO:"NIO",NOK:"NOK",NPR:"NPR",NZD:"NZD",PEN:"PEN",PGK:"PGK",PHP:"PHP",PLN:"PLN",PYG:"PYG",QAR:"QAR",RON:"RON",RSD:"RSD",RUB:"RUB",SAR:"SAR",SBD:"SBD",SCR:"SCR",SEK:"SEK",SGD:"SGD",SHP:"SHP",SLL:"SLL",SOS:"SOS",SRD:"SRD",SZL:"SZL",THB:"THB",TJS:"TJS",TOP:"TOP",TTD:"TTD",TWD:"TWD",TZS:"TZS",USD:"USD",UYU:"UYU",VND:"VND",VUV:"VUV",WST:"WST",XAF:"XAF",XCD:"XCD",YER:"YER"},U={DESKTOP:"desktop",MOBILE:"mobile"},c={PAYPAL:"paypal",VENMO:"venmo",ITAU:"itau",CREDIT:"credit",PAYLATER:"paylater",CARD:"card",IDEAL:"ideal",SEPA:"sepa",BANCONTACT:"bancontact",GIROPAY:"giropay",SOFORT:"sofort",EPS:"eps",MYBANK:"mybank",P24:"p24",VERKKOPANKKI:"verkkopankki",PAYU:"payu",BLIK:"blik",TRUSTLY:"trustly",ZIMPLER:"zimpler",MAXIMA:"maxima",OXXO:"oxxo",BOLETO:"boleto",WECHATPAY:"wechatpay",MERCADOPAGO:"mercadopago"},G={PAYPAL:"PayPal",CREDIT:"PayPal Credit"},B={VISA:"visa",MASTERCARD:"mastercard",AMEX:"amex",DISCOVER:"discover",HIPER:"hiper",ELO:"elo",JCB:"jcb",CUP:"cup"},s={BALANCE:"balance",CARD:"card",BANK:"bank",CREDIT:"credit"},K={PAY_IN_4:"payIn4",FLEX:"flex",CREDIT:"credit"},f=R.US,l=d.USD,p=a.CAPTURE,Y=L.TRUE,V=L.TRUE,m=L.TRUE,b=P.FALSE,W=F.BUTTONS,y=r.FALSE,J=!0}])}));
//# sourceMappingURL=paypal-sdk-constants.js.map