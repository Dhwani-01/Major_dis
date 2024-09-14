import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {
  isLaboratoryTabActive = false;

  onTabChange(event: any) {
    this.isLaboratoryTabActive = event.index === 0;  
  }
}
