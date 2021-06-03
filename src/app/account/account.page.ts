import { Component, OnInit } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  tags: String[] = ['bbzw', 'bbzb', 'luzern', 'openair frauenfeld', 'sursee', 'schule luzern', 'pilatus aircraft']
  newTag: String = ''


  constructor() { }

  ngOnInit() {
  }

  onAddTag(){
    this.tags = [...this.tags, this.newTag]
    this.newTag = ''
  }
}
