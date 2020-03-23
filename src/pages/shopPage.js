class ShopPage {
    accessoriesTab = 'li.menu_parent > a[href="/accessories/"]'
    accessoriesPageTitle = ".center.clearfix  > h1"
    coverCheckbox = 'p:first-child > [value="Y"]'
    screenProtectorCheckbox = 'p:nth-child(2) > [value="Y"]'
    accessoryDropdown = '.menu_parent > a[href="/accessories/"]'
    protectorAccessory = ':nth-child(3) > * > * > li:nth-child(1) > *'
}
export default new ShopPage();
