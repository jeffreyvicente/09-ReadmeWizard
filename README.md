# README Wizard



## Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)



## Description

README Wizard allows users to quickly and easily generate a professional README.md file for projects on GitHub. The user is prompted with a series of questions about their project, including its name, description,and installation instructions. The application then takes the user's input and generates a high-quality README file that can be added to their project repository.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-up](#mock-up)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

1. Download the application: You can either download the application from a website or clone it from a Git repository. If you're cloning it from a Git repository, you'll need to have Git installed on your computer.
2. Extract the files: Once you have the application downloaded, extract the files from the zip folder. You can extract the files to any location on your computer.
3. Open the application: Open the folder where you extracted the files, and look for the index.html file. Double-click on it to open it in your default web browser. You should now see the application running.


To install the necessary dependencies for this application, run the following command:
```
npm install inquirer
```


To use this application, run the following command:

```
node index.js
```

Then answer the prompts to generate your README.md file.



## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


## Mock-up

![alt text](/images/screenshot.png)

## Video Demo




[Demo Backup](https://drive.google.com/file/d/1x5UV2QOceWztq1vh6Wk6k3fx4U7O78_u/view?usp=share_link)



## Technologies Used
- Nodejs

