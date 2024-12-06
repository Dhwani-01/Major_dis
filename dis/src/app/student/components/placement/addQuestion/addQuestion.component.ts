import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacementService } from 'src/app/services/placement.service';

interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}

@Component({
  selector: 'app-addQuestion',
  // standalone: true,
  // imports: [FormsModule, CommonModule],
  templateUrl: './addQuestion.component.html',
  styleUrls: ['./addQuestion.component.css']
})

export class AddQuestionComponent {

  @Input() Category: string = '';
  @Input() companyId: number = 0;
  @Input() value: string = '';

  isVisible = false;
  topicList: Topic[]=[];
  selectedOption : string='';
  showOtherInput = false;
  otherOption = '';
  question='';

  constructor(private route: ActivatedRoute, private placementService: PlacementService,) {}

  @Output() formClosed = new EventEmitter<void>();

  ngOnInit(){
    this.topicList = this.placementService.getTopics();
    this.companyId = this.route.snapshot.params['companyId'];
    this.value = this.route.snapshot.params['value'];
    //this.Category = this.route.snapshot.params['category'];
    this.openForm();
    console.log(this.companyId, this.value, this.Category);
  }

  openForm() {
    this.isVisible = true;
  }

  closeForm() {
    this.isVisible = false;
    this.formClosed.emit(); // Optional: Emit an event when the form is closed
  }

  onSubmit() {
    if (this.otherOption.trim()){
      let topic={
         name: this.otherOption,
         category: this.Category,
         companyId: this.companyId,
      }
      if (this.value === 'Internship'){
      this.placementService.addTopic(topic).subscribe(
        (response : Topic)=> {
          this.add(response.id);
          this.formClosed.emit();
        }
      );
    }
    else{
      this.placementService.addPlacementTopic(topic).subscribe(
        (response : Topic)=> {
          this.add(response.id);
          this.formClosed.emit();
        }
      );
    }
    }
    
    else {
      this.add(+(this.selectedOption));
  }

    this.closeForm();
    }

  add(selectedOption: number){
    let Question={
      question: this.question,
      topicId: selectedOption,
    }
    if (this.value === 'Internship'){
    this.placementService.addQuestion(Question).subscribe(response => {
    });
    this.formClosed.emit();
  }
  else{
    this.placementService.addPlacementQuestion(Question).subscribe(response => {
    });
    this.formClosed.emit();
  }

  }
  onOptionChange() {
    this.showOtherInput = this.selectedOption === '0';
  }

}