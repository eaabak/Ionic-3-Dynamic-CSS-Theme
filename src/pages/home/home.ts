import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThemeService} from '../../providers/theme/theme.service';
import { themes } from '../../providers/theme-interface';
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public navctrl: NavController;
  private theme: ThemeService;
  constructor( ) {
    this.theme = new ThemeService(document);
  }

  changeTheme(name) {
    
    this.theme.setTheme(themes[name]);
    
  }

}
