import { Component, OnInit } from '@angular/core';
import { BoggleService } from '../boggle.service';
import { ClearService } from '../clear.service';
import { Die } from '../die';
import { BoggleBox } from '../bogglebox'



@Component({
  selector: 'app-boggle',
  templateUrl: './boggle.component.html',
  styleUrls: ['./boggle.component.css']
})
export class BoggleComponent implements OnInit {
  dice: Die[][] = [];
  id: string = '';
  letters: string = '';
  score: number = 0;
  words: string[] = [];

  async onSubmit() {
    let receivedScore = await this.boggleService.getScore(this.id, this.letters);
    if(receivedScore > 0){
      this.score += receivedScore;
      this.words.push(this.letters);
    }
    console.log(this.score);
    this.letters = '';
    this.clearService.clear();

  }

  addLetter(letter: string) {
    this.letters = this.letters.concat(letter);
  }

  constructor(private boggleService: BoggleService, private clearService: ClearService) { }

  ngOnInit(): void {
    this.boggleService.getBoggleBox().subscribe(
      (boggleBox) => (this.dice = boggleBox.dice, this.id = boggleBox.boggleBoxId));
  };


}


