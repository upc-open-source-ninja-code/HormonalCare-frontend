import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../model/message';
import { DoctorProfile } from '../../model/doctor-profile';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {

  @Input() currentUserEmail: string = '';
  @Input() selectedUserEmail: string = '';

  currentUser: DoctorProfile | null = null;
  selectedUser: DoctorProfile | null = null;
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.loadUsersAndMessages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentUserEmail'] || changes['selectedUserEmail']) {
      this.loadUsersAndMessages();
    }
  }

  loadUsersAndMessages() {
    if (this.currentUserEmail && this.selectedUserEmail) {
      this.chatService.getDoctorByEmail(this.currentUserEmail).subscribe(
        currentUser => {
          this.currentUser = currentUser;
        }
      );
      this.chatService.getDoctorByEmail(this.selectedUserEmail).subscribe(
        selectedUser => {
          this.selectedUser = selectedUser;
          this.getMessages();
        }
      );
    }
  }

  getMessages() {
    if (this.currentUser && this.selectedUser) {
      this.chatService.getMessages(this.currentUser.email, this.selectedUser.email).subscribe(
        messages => this.messages = messages
      );
    }
  }

  sendMessage() {
    if (this.newMessage.trim() !== '' && this.currentUser && this.selectedUser) {
      const message: Message = {
        id: 0, // El ID será generado automáticamente por json-server
        from: this.currentUser.email,
        to: this.selectedUser.email,
        content: this.newMessage,
        timestamp: new Date().toISOString()
      };
      this.chatService.sendMessage(message).subscribe(
        sentMessage => {
          this.messages.push(sentMessage);
          this.newMessage = '';
        }
      );
    }
  }
}
