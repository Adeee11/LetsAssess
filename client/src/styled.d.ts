import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    pellete: {
      primary: string;
      secondary: string;
      main: string;
      success: string;
      background: string;
      purple: string;
    };
    boxShadow: {
      card: string;
      header:string;
    };
  }
}
