import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacementService } from 'src/app/services/placement.service';
import { CommonService }  from 'src/app/services/common.service';

export interface question{
  question: string;
  topicId: number;
}

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
  Question: question[] = [];
  topicId: number = 0;
  value: string='';

  constructor(private placementService: PlacementService, private route: ActivatedRoute, private commonService: CommonService) {}

 ngOnInit(): void {
     this.topicId = this.route.snapshot.params['topicId'];
     this.value = this.route.snapshot.params['value'];
     this.fetchQuestions(this.topicId)
 } 
  fetchQuestions(topicId: number): void {
    if (this.value == 'Internship'){
    this.placementService.getQuestionsByTopicId(topicId).subscribe((Question:question[]) => {
      this.Question = Question;
  });
  }
    else{
      this.placementService.getPlacementQuestionsByTopicId(topicId).subscribe((Question:question[]) => {
        this.Question = Question;
    });
    }
}
exportQuestionsToCsv(): void {
    const columns = { question: 'Questions:' }; // Define headers
    this.commonService.exportToCsv(this.Question, 'QuestionsList', columns);
  }
}