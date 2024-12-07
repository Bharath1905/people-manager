# People Manager

## Overview
The **People Manager** is a Single Page Application (SPA) built with Angular 7/8. It allows users to manage a list of people through a simple and intuitive interface. The app provides functionality to:

- List all people
- Edit details of a person
- Delete a person

This project demonstrates Angular concepts like routing, component interaction, and service-based architecture.

## Features
- **People List View**: Displays a list of people with options to edit or delete each entry.
- **Edit Person View**: Enables editing of the details of a selected person.
- **Delete Person Functionality**: Removes a person from the list.

## Project Structure
```
src/
├── app/
│   ├── app.component.*      # Root component files
│   ├── app.module.ts        # Main Angular module
│   ├── app.config.ts        # Application configuration
│   ├── app.routes.ts        # Route definitions
│   ├── components/          # Feature-specific components
│   │   ├── edit/            # Edit person component
│   │   └── list/            # List people component
│   ├── models/              # Data models
│   │   └── person.model.ts  # Person data structure
│   └── services/            # Service classes
│       └── person.service.ts # Logic to manage people
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/people-manager.git
   cd people-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open the application in your browser at:
   ```
   http://localhost:4200
   ```

## Usage
1. Navigate to the **People List** view to see all people.
2. Click **Edit** to update a person's details.
3. Click **Delete** to remove a person from the list.

## Technologies Used
- **Angular 7/8**: Framework for building SPAs.
- **TypeScript**: Primary language for Angular development.
- **CSS**: Styling.

---

## Webpages
<img width="1191" alt="image" src="https://github.com/user-attachments/assets/934c419f-4455-4b1d-a1ef-9f9428fb7fb3">
<img width="1191" alt="image" src="https://github.com/user-attachments/assets/e33bf67f-d3e2-47f7-bab5-225ec8e66f59">
<img width="1191" alt="image" src="https://github.com/user-attachments/assets/0f87859d-e177-40bc-bf09-53324a480941">


