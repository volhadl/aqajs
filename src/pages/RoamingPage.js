class RoamingPage {
    tariffOne = ':nth-child(1) > *> .item__img > *'
    tariffTwo = ':nth-child(2) > *> .item__img > *'
    tariffThree = ':nth-child(3) > *> .item__img > *'
    tariffOneShowButton = '[href*="/1GB-v-rouminge/"]'
    tariffThreeShowButton = '[href*="/otkrytyy-internet-v-rouminge/"]'
}
export default new RoamingPage();
