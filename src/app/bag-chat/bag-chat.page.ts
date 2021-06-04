import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bag-chat',
  templateUrl: './bag-chat.page.html',
  styleUrls: ['./bag-chat.page.scss'],
})
export class BagChatPage implements OnInit {

  @ViewChild("scrollMe", {static: false, read: ElementRef}) myScrollContainer: ElementRef;

  message: String = "";
  showSpinnerIcon = false;
  showDates = false;
  chatList: ChatMessage[];
  chatListRef: ChatMessage;

  currentUser: String = 'You';

  constructor() {}

  ngOnInit() {
    this.chatList = [
      {
        username: 'You',
        text: 'That could be mine!',
        date: null
      },
      {
        username: 'You',
        text: 'It should have some blue nike shoes in it and on one key it says "Lambo biatch"',
        date: null
      },
      {
        username: '',
        text: 'Hey, guess it found its owner. You by chance at the trainstation anytime soon?',
        date: null
      },
      {
        username: 'You',
        text: 'Ah nice, am there like every day 8pm. Wanna meet up tomorrow?',
        date: null
      },
      {
        username: '',
        text: "Aight, I'll be there",
        date: null
      }
    ]
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