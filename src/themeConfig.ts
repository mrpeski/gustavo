import { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#1D4ED8",
    colorPrimaryBg: "#E9EFFF",
    colorBgContainer: "#F9FAFF",
    borderRadius: 8,
    lineWidth: 0.5,
    colorBorder: '#ECECEC',
    colorText: '#0B0B0B'
  },
  components: {
    Menu: {
      itemPaddingInline: 12,
      iconSize: 24,
      itemHoverBg: "#E9EFFF",
      itemBorderRadius: 8,
      itemHeight: 48
    },
    Layout: {
      bodyBg: "#F9FAFF",
      headerBg: "#F9FAFF",
    },
    Typography: {
      titleMarginBottom: 5,
      titleMarginTop: 1,
    },
    List: {
      colorBgContainer: "#FFF",
      itemPaddingLG: "0",
    },
    Button: {
      defaultBg: "#FFF",
      // paddingContentHorizontal: 16,
      // paddingContentVertical: 8,
    },
    Checkbox: {
      colorBorder: '#8492A7',
      lineWidth: 1.5,
      size:  16
    },
    Input: {
      lineWidth: 1,
      colorBorder: '#F3F3F3',
            borderRadius: 8,
            colorBgContainer: '#FFF'

    },
    Collapse: {
      headerBg: '#FFF',
      lineWidth: 1,
      headerPadding: "18px 16px",
         
      colorBorder: 'transparent',
    }
  },
};
