import { ElementRef, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  @Output() startLoad: EventEmitter<any> = new EventEmitter();
  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;
  files: any[] = [];
  fileSelected = false;
  fileRejected = false;


  ngOnInit() {
  }

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.fileSelected = false;
  }

  prepareFilesList(files: Array<any>) {
    this.fileRejected = false;
    for (const item of files) {
      if (item.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.fileRejected = true;
      }
      item.progress = 0;
      this.files = [];
      this.files.push(item);
      this.fileSelected = true;
    }
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  emitEvent($event) {
    this.startLoad.emit(this.files[0]);
    this.files = [];
    this.fileSelected = false;
  }

}
