import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit{
  public links: Array<{title: string, url: string, icon: 'string'}>;
  public title: string;

  constructor(private readonly transloco$: TranslocoService){}

  ngOnInit(): void {
    this.transloco$.selectTranslateObject("LANDING_MODULE.LinksPage")
    .subscribe(template=>{
      this.links = template.links
      this.title = template.title
    })
  }

}
