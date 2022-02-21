import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-skip-test-and-template',
  template: `
    <button>
      Nice button works!
    </button>
  `,
  styleUrls: ['./button-skip-test-and-template.component.scss']
})
export class ButtonSkipTestAndTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
