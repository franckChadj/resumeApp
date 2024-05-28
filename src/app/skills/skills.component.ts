import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { category: 'Programming Languages', details: ['Java', 'Java Spring Boot', 'Python', 'C#'] },
    { category: 'Frontend', details: ['HTML', 'CSS', 'Angular', 'JavaScript', 'TypeScript', 'Bootstrap'] },
    { category: 'Tools and Technologies', details: ['Jaspersoft Report', 'Git &amp; GitHub/GitLab', 'MS SQL Server', 'Jira'] },
    { category: 'Others', details: ['Systems Design with UML', 'Agile Development with Scrum', 'Analytical Thinking'] }
  ];
}
