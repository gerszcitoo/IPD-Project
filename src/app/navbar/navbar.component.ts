import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  burger=false;

  constructor() { }

  ngOnInit(): void {
  }
  
  // ---------------- MOBILE BURGER MENU ANIMATION-----------
  toggleBurger(){
    if(!this.burger){
      this.burger = true;
    } else {
      this.burger = false;
    }
    const navToggle = document.querySelector(".mobile-nav");
    const primaryNav = document.querySelector(".primary-nav");
    navToggle?.addEventListener("click", () => {
        const visibility = primaryNav?.getAttribute("data-visible");
        const aria = primaryNav?.getAttribute("aria-expanded")
        if (visibility === "false") {
            primaryNav?.setAttribute("data-visible", 'true');
            primaryNav?.setAttribute("aria-expanded",'true');
        } else if (visibility === "true") {
            primaryNav?.setAttribute("data-visible", 'false');
            primaryNav?.setAttribute("aria-expanded", 'false');
        }
    });
    
  }
  // ----------------- MOBILE MENU DEPLOY-------------
  // }

}
