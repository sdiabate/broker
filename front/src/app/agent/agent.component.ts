import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title(): string {
    return "Gestion des agents";
  }
}
