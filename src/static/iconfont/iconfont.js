import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1557367696748'); /* IE9 */
  src: url('iconfont.eot?t=1557367696748#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1557367696748') format('woff'),
  url('iconfont.ttf?t=1557367696748') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1557367696748#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e851";
}

.icondianzan:before {
  content: "\e60c";
}

.iconhuidaodingbu:before {
  content: "\e631";
}

.iconzuozhe:before {
  content: "\e688";
}

.iconshijian:before {
  content: "\e606";
}

.iconAa:before {
  content: "\e636";
}

.iconfangdajing:before {
  content: "\e637";
}

.iconbi:before {
  content: "\e61d";
}


`
