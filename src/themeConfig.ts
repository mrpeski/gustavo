import { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
    token: {
      colorPrimary: '#1D4ED8',
      colorPrimaryBg: '#E9EFFF',
      colorBgContainer: '#F9FAFF;'
    },
    components: {
        Menu: {
          /* here is your component tokens */
          padding: 12,
          iconSize: 24,
          itemHoverBg: '#E9EFFF',
          itemBorderRadius: 8
        },
      },
  };

