import { createGlobalStyle } from "styled-components";

const darkMode = (state) => {

}

const Globalstyle = createGlobalStyle`
    :root {
        --backGroundImg: url("./images/bg-desktop-light.jpg");
        --backGroundImgPhone: url("./images/bg-mobile-light.jpg");
        --backGroundBody: hsl(236, 33%, 92%);
        --groundUl: hsl(0, 0%, 98%);
        --colorText: hsl(235, 19%, 35%);
        --textHover: hsl(235, 19%, 35%);
    }`;