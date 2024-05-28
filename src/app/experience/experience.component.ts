import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences = [
    {
      title: 'Market Research Interviewer',
      company: 'Numeris',
      duration: 'Feb 2024 - Now',
      responsibilities: [
        'Utilize strong communication skills in both English and French to conduct surveys and gather data on media usage habits.',
        'Achieve consistently high-quality scores by maintaining attention to detail and accuracy in survey administration.',
        'Exceed performance expectations within just three weeks, surpassing key performance indicators (KPIs).',
        'Collaborate effectively with team members to ensure project objectives are met efficiently.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Felicity Limited Company',
      duration: 'Jul 2022 - Aug 2023',
      projects: [
        {
          name: 'Banking Application',
          environment: ['IntelliJ Idea', 'Jaspersoft Report', 'Java Spring Boot', 'Angular', 'UML', 'Bootstrap', 'Git/GitLab', 'Jira', 'MySQL Workbench', 'SQL Server', 'Visual Studio Code'],
          responsibilities: [
            'Developed features for clients\' accounts and transactions management. Backend and Frontend sides.',
            'Designed and implemented reports such as receipts, daily reports, and monthly closure reports.',
            'Designed functionalities of the system using UML.',
            'Managed the data in the database using SQL server and MySQL Workbench.'
          ]
        },
        {
          name: 'ERP for hospitals and medium-sized businesses',
          environment: ['IntelliJ Idea', 'JasperSoft Report', 'Java SpringBoot', 'Angular', 'UML', 'Bootstrap', 'Git/GitLab', 'Jira', 'MySQL Workbench', 'SQL Server', 'Python', 'Scikit Learn', 'Flask'],
          responsibilities: [
            'Developed and designed the HR module.',
            'Wrote user stories and use case diagrams.',
            'Participated in the redaction of user documentation.',
            'Designed and implemented a machine learning model with over 90% accuracy.'
          ]
        }
      ]
    },
    {
      title: 'Call Center Agent',
      company: 'Intelcia',
      duration: 'Jun 2020 - Mar 2022',
      responsibilities: [
        'Conducted regular follow-up with customers on ADSL line activation and progress.',
        'Maintained 95% of customer satisfaction.',
        'Helped customers with their line moving and internet equipment\'s connection.',
        'Consistently achieved a First Call Resolution rate of over 90%.'
      ]
    }
  ];
}
