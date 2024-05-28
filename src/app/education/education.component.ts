import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  
  
  education = [
    {
      degree: 'Full Stack .NET Cloud Developer',
      institution: 'Humber College',
      duration: 'Jan 2024 - Jun 2024'
    },
    {
      degree: 'Bachelor\'s degree in Software Engineering',
      institution: 'IUT Douala',
      duration: 'Oct 2016 - Jul 2019'
    },
    {
      degree: 'Programming Foundations: Object-Oriented Design',
      institution: 'LinkedIn Learning',
      duration: 'Jan 2024'
    },
    {
      degree: 'Demystifying the .NET Platform: Structures, Features and Potential',
      institution: 'LinkedIn Learning',
      duration: 'Feb 2024'
    }
  ];

}
