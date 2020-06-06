// 1/ import original module declarations
import "styled-components"

// 2/ … and extend them !
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string
    }
  }
}
