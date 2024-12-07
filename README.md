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

## Repository Name
**people-manager**

## Repository Description
> An Angular 7/8 Single Page Application for managing a list of people with features to list, edit, and delete individuals.

---

## Webpage Screenshots

<img width="1191" alt="image" src="https://github.com/user-attachments/assets/b43b5487-4598-46af-8a3e-bf4b9a1fd371">
<img width="1191" alt="image" src="https://github.com/user-attachments/assets/623eebe1-e039-4417-87a4-161b5e38fb96">
<img width="1191" alt="image" src="https://github.com/user-attachments/assets/45410ec8-284b-4a45-b9e0-fd7273feeb32">



