import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
const CSV_ICON =

  '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.94 281.25">'
  + '  <defs>'
  + '    <style>'
  + '      .cls-1 {'
  + '        fill: #9acd8d;'
  + '      }'
  + '    </style>'
  + '  </defs>'
  + '  <path class="cls-1" d="M249.32,65,190.73,6.44a5.86,5.86,0,0,0-4.15-1.71h-123A23.46,23.46,0,0,0,40.1,28.16V262.54A23.46,23.46,0,0,0,63.54,286H227.6A23.46,23.46,0,0,0,251,262.54V69.18A5.83,5.83,0,0,0,249.32,65ZM192.44,24.73,231,63.32H204.16A11.74,11.74,0,0,1,192.44,51.6Zm46.88,237.81a11.74,11.74,0,0,1-11.72,11.72H63.54a11.74,11.74,0,0,1-11.72-11.72V28.16A11.74,11.74,0,0,1,63.54,16.44H180.72V51.6A23.46,23.46,0,0,0,204.16,75h35.16Z" transform="translate(-40.1 -4.73)"/>'
  + '  <g>'
  + '    <path class="cls-1" d="M219.79,97.67H160V87.33A9.44,9.44,0,0,0,148.78,78L69.61,92.89a9.44,9.44,0,0,0-7.72,9.28V211a9.44,9.44,0,0,0,7.71,9.28l79.12,14.84a9,9,0,0,0,1.8.18,9.44,9.44,0,0,0,9.44-9.45V215.53h59.83a9.45,9.45,0,0,0,9.45-9.44v-99A9.46,9.46,0,0,0,219.79,97.67ZM151,225.88a.46.46,0,0,1-.17.35.44.44,0,0,1-.36.08L71.25,211.47a.45.45,0,0,1-.36-.44V102.17a.45.45,0,0,1,.37-.44l79.26-14.86h0a.48.48,0,0,1,.25.1l0,0a.42.42,0,0,1,.15.34Zm69.28-19.79a.45.45,0,0,1-.45.44H160V191.24h10.35a5,5,0,1,0,0-9.9H160v-9.89h10.35a4.95,4.95,0,0,0,0-9.9H160v-9.9h10.35a4.95,4.95,0,1,0,0-9.89H160v-9.9h10.35a5,5,0,0,0,0-9.9H160V106.67h59.83a.45.45,0,0,1,.45.45Z" transform="translate(-40.1 -4.73)"/>'
  + '    <path class="cls-1" d="M200,122h-9.9a4.95,4.95,0,1,0,0,9.9H200a4.95,4.95,0,0,0,0-9.9Z" transform="translate(-40.1 -4.73)"/>'
  + '    <path class="cls-1" d="M200,141.76h-9.9a4.95,4.95,0,1,0,0,9.89H200a4.95,4.95,0,1,0,0-9.89Z" transform="translate(-40.1 -4.73)"/>'
  + '    <path class="cls-1" d="M200,161.55h-9.9a4.95,4.95,0,0,0,0,9.9H200a4.95,4.95,0,0,0,0-9.9Z" transform="translate(-40.1 -4.73)"/>'
  + '    <path class="cls-1" d="M200,181.34h-9.9a4.95,4.95,0,1,0,0,9.9H200a4.95,4.95,0,0,0,0-9.9Z" transform="translate(-40.1 -4.73)"/>'
  + '    <path class="cls-1" d="M118.8,155.26l15.82-20.35a5,5,0,0,0-7.81-6.09l-14.65,18.85L99.81,133.55a4.95,4.95,0,0,0-7.45,6.51L106,155.62,92.18,173.36a4.95,4.95,0,0,0,7.81,6.07l12.62-16.23L127,179.64a4.94,4.94,0,1,0,7.44-6.5Z" transform="translate(-40.1 -4.73)"/>'
  + '  </g>'
  + '</svg>'



const PDF_ICON =
  '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.94 281.25">'
  + '  <defs>'
  + '    <style>'
  + '      .cls-1 {'
  + '        fill: #9acd8d;'
  + '      }'
  + '    </style>'
  + '  </defs>'
  + '  <g>'
  + '    <path class="cls-1" d="M249.1,65,190.51,6.44a5.85,5.85,0,0,0-4.14-1.71h-123A23.46,23.46,0,0,0,39.88,28.16V262.54A23.46,23.46,0,0,0,63.32,286H227.38a23.46,23.46,0,0,0,23.44-23.43V69.18A5.83,5.83,0,0,0,249.1,65ZM192.22,24.73l38.59,38.59H203.94A11.74,11.74,0,0,1,192.22,51.6ZM239.1,262.54a11.74,11.74,0,0,1-11.72,11.72H63.32A11.74,11.74,0,0,1,51.6,262.54V28.16A11.74,11.74,0,0,1,63.32,16.44H180.51V51.6A23.46,23.46,0,0,0,203.94,75H239.1Z" transform="translate(-39.88 -4.73)"/>'
  + '    <path class="cls-1" d="M175.22,176.74a168.8,168.8,0,0,1-14-12.1c-4.46-4.46-8.44-8.78-11.89-12.9,5.39-16.66,7.75-25.25,7.75-29.83,0-19.45-7-23.44-17.58-23.44-8,0-17.58,4.17-17.58,24,0,8.75,4.79,19.36,14.29,31.7-2.33,7.09-5.06,15.26-8.12,24.48-1.48,4.43-3.08,8.52-4.78,12.31-1.38.61-2.71,1.24-4,1.88-4.66,2.33-9.08,4.43-13.18,6.37C87.4,208.07,75,213.93,75,225.5c0,8.4,9.12,13.6,17.58,13.6C103.51,239.1,120,224.55,132,200c12.47-4.92,28-8.56,40.22-10.84,9.81,7.54,20.64,14.75,25.88,14.75,14.53,0,17.58-8.4,17.58-15.44,0-13.85-15.82-13.85-23.44-13.85A136.88,136.88,0,0,0,175.22,176.74Zm-82.6,50.64a9.26,9.26,0,0,1-5.86-1.88c0-4.16,12.38-10,24.37-15.7l2.31-1.1C104.64,221.46,95.94,227.38,92.62,227.38Zm41-104.91c0-12.28,3.81-12.28,5.86-12.28,4.14,0,5.86,0,5.86,11.72,0,2.47-1.65,8.65-4.66,18.3C136.09,133.13,133.63,127.06,133.63,122.47Zm4.49,63c.37-1,.72-2,1.07-3.09,2.17-6.52,4.13-12.38,5.87-17.66q3.66,4,7.87,8.23c1.1,1.1,3.82,3.57,7.45,6.67C153.15,181.17,145.47,183.12,138.12,185.45Zm65.82,3.05c0,2.63,0,3.72-5.43,3.76-1.6-.34-5.29-2.52-9.84-5.62,1.65-.18,2.87-.27,3.55-.27C200.88,186.37,203.34,187.21,203.94,188.5Z" transform="translate(-39.88 -4.73)"/>'
  + '  </g>'
  + '</svg>'
  
@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss']
})



export class RangeSelectorComponent implements OnInit {
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  currentOption:-1;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<RangeSelectorComponent>    
    ) {
      iconRegistry.addSvgIconLiteral('csv-icon', sanitizer.bypassSecurityTrustHtml(CSV_ICON));
    iconRegistry.addSvgIconLiteral('pdf-icon', sanitizer.bypassSecurityTrustHtml(PDF_ICON));
     }

  ngOnInit() {
  }

  acceptChange()
  {
    let dataResult={
      range:this.range.value,
      option:this.currentOption
    }

  this.dialogRef.close(dataResult)
  }

  setExportOption(option)
  {
    this.currentOption=option
    this.acceptChange()
  }


}