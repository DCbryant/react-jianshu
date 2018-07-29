import {injectGlobal} from 'styled-components';

injectGlobal`
    @font-face {
        font-family: "iconfont";
        src: url('./iconfont.eot?t=1532852330489'); /* IE9*/
        src: url('./iconfont.eot?t=1532852330489#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1532852330489') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1532852330489#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`