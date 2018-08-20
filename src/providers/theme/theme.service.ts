import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeProvider } from '../theme/theme';

@Injectable()
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  // Override all global variables with a new theme
  setTheme(theme) {
    console.log(theme);
    const cssText = ThemeProvider.CSSTextGenerator(theme);
    this.setGlobalCSS(cssText);
  }

  // Define a single CSS variable
  setVariable(name, value) {
    
    this.document.documentElement.style.setProperty(name, value);
  }

  private setGlobalCSS(css: string) {
    document.documentElement.style.cssText = css;
    console.log(document);
    
  }

}