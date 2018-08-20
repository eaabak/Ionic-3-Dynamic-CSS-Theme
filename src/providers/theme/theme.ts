import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Color from 'color';

/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const defaults = {
  primary:    '#188aff',
  secondary:  '#32db64',
  light:      '#f4f4f4',
  dark:       '#222',
  medium:     '#112233',
  tertiary:   '#20a834',
};


@Injectable()
export class ThemeProvider {
  

  constructor(public http: HttpClient) {
    console.log('Hello ThemeProvider Provider');
  }

  static CSSTextGenerator(colors) {
    console.log("n");
    colors = {...defaults, ...colors}
    const {
      primary,
      secondary,
      light,
      dark,
      medium,
      tertiary
    } = colors;

    const shadeRatio = 0.1;
    const tintRatio = 0.1;
    return `
    --ion-color-base: ${light};
    --ion-color-contrast: ${dark};

    --ion-color-primary: ${primary};
    --ion-color-primary-rgb: 56,128,255;
    --ion-color-primary-contrast: ${this.contrast(primary)};
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade:  ${Color(primary).darken(shadeRatio)};


    --ion-color-secondary: ${secondary};
    --ion-color-secondary-rgb: 12,209,232;
    --ion-color-secondary-contrast: ${this.contrast(secondary)};
    --ion-color-secondary-contrast-rgb: 255,255,255;
    --ion-color-secondary-shade:  ${Color(secondary).darken(shadeRatio)};
    --ion-color-secondary-tint:   ${Color(secondary).lighten(tintRatio)};

    --ion-color-tertiary: ${tertiary};
    --ion-color-tertiary-rgb: 112,68,255;
    --ion-color-tertiary-contrast: ${this.contrast(tertiary)};
    --ion-color-tertiary-contrast-rgb: 255,255,255;
    --ion-color-tertiary-shade:  ${Color(tertiary).darken(shadeRatio)};
    --ion-color-tertiary-tint:   ${Color(tertiary).lighten(tintRatio)};
    // omitted other styles, see full source code
`;
  }

  static contrast(color, ratio = 0.8) {
    color = Color(color);
    return color.isDark() ? color.lighten(ratio) : color.darken(ratio) ;
  }

}
