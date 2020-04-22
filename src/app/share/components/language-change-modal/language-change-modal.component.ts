import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface LanguageItem {
  title: string;
  value: string;
}

@Component({
  selector: 'app-language-change-modal',
  templateUrl: './language-change-modal.component.html',
  styleUrls: ['./language-change-modal.component.scss']
})
export class LanguageChangeModalComponent implements OnInit {
  currentLanguage = '简体中文';
  languageOptions: LanguageItem[] = [
    {title: '简体中文', value: 'cn'},
    {title: '繁體中文', value: 'tcn'},
    {title: 'English', value: 'en'},
  ];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.languageOptions.length; i++) {
      if (this.translateService.currentLang === this.languageOptions[i].value) {
        this.currentLanguage = this.languageOptions[i].title;
        break;
      }
    }
  }

  changeLanguage(language: LanguageItem) {
    this.currentLanguage = language.title;
    this.translateService.use(language.value);
  }

}
