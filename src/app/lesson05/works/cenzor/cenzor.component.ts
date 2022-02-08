import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  textarea: Array < any >= [];
  getText = '';
  bad_words!: string;
  word!: string;
  all_bad_words: Array < any > = [];
  public modalWindow = false;
  constructor() {}
  ngOnInit(): void {}
  showModal(): void {
    this.modalWindow = !this.modalWindow;
  }
  addWord(): void {
    if (this.word === '') {
      alert('Please write a bad word!')
    } else {
      this.all_bad_words.push(this.word)
      this.bad_words = `${this.all_bad_words}`;
      this.word = '';
    }
  }
  //button "Reset"
  resetWords() {
    this.all_bad_words = [];
    this.bad_words = '';
    this.getText = ''
  }
  //check textarea
  cenzorWords() {
    if (this.getText === '') {
      alert('Please write text for cenzor!');
    } else {
      this.textarea.push(this.getText);
      let check_words = this.textarea[0].split(' ');
      for (let i = 0; i < check_words.length; i++) {
        if (this.all_bad_words.some(n => n === check_words[i])) {
          let str: string = check_words[i].slice(check_words[i].length);
          check_words[i] = str.padStart(check_words[i].length, '*');
        }
      }
      let checked = check_words.join(' ');
      this.getText = checked;
      this.textarea = [];
    }
  };
}