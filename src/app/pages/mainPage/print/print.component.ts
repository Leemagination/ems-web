import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  currentPdfIndex = 1;
  pdfMap = {
    1: 'Agatsuma Zenitsu.pdf',
    2: 'Shinazugawa Sanemi.pdf',
    3: 'Tomioka Giyuu.pdf'
  };
  iframeSrc: SafeUrl = 'assets/img/Agatsuma Zenitsu.pdf';

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.safeUrl();
  }

  nextPDF() {
    this.currentPdfIndex++;
    this.safeUrl();
  }

  prePDF() {
    this.currentPdfIndex--;
    this.safeUrl();
  }

  safeUrl() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/img/${this.pdfMap[this.currentPdfIndex]}`);
  }

}
