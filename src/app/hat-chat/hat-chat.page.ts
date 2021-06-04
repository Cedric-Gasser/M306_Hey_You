import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hat-chat',
  templateUrl: './hat-chat.page.html',
  styleUrls: ['./hat-chat.page.scss'],
})
export class HatChatPage implements OnInit {

  @ViewChild("scrollMe", {static: false, read: ElementRef}) myScrollContainer: ElementRef;

  message: String = "";
  showSpinnerIcon = false;
  showDates = false;
  chatList: ChatMessage[];
  chatListRef: ChatMessage;

  currentUser: String = 'You';

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }

  sendMessage(e) {
    if (this.message !== '') {
      if(this.chatList == null){
        this.chatList = new Array<ChatMessage>();
      }
      this.showSpinnerIcon = true;
      let formattedDate = new Date().toLocaleString();

      let chatMessage: ChatMessage = {
        username: this.currentUser,
        text: this.message,
        date: formattedDate
      }

      this.chatList.push(chatMessage);

      this.message = '';
      this.showSpinnerIcon = false;
    }
    console.log(e);
  }

  swipeEvent(swipe){
    console.log("Swipe")
    if (swipe.direction === 2 || swipe.direction === 4) {
      this.showDates = !this.showDates;
    } else {
      console.log(swipe)
    }
  }
}

interface ChatMessage {
  username: String;
  text: String;
  date: any;
}