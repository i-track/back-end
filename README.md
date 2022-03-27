# back-end
# General Approach
We set the MVP foundation for how our front end will interact with our backend in regards to components and models. As we progress through this project we plan on being flexible with the structure of this application for both front-end and back-end.

# User Stories

User Stories - 

Our users' typically have the responsibility of managing large groups of people. They can create departments and add or delete members so that they can better understand the structure of their business.

## Project Links

- []()

## Time/Priority Matrix
- [https://lucid.app/lucidchart/20cee9f2-05bd-408d-a0af-d418304b618e/edit?invitationId=inv_527c5f11-64e4-488c-a1a7-750e16eb0f28](Link)

```
```
## Wireframes

- [https://lucid.app/lucidchart/319b7100-52a0-4e76-aedb-22aec6bb6c55/edit?invitationId=inv_519047c0-c455-43b8-a8c4-8562a1c0052f](Link) 

## React

- [https://lucid.app/lucidchart/6f8cbfe6-bc47-44aa-8e69-cc4ecba3d389/edit?invitationId=inv_e8ee17b1-b942-4ffe-a01b-26fe3e3e336e](Link)

#### MVP 

# Client Side
<!-- FUNCTIONAl -->
- Form Validation/ POST / UPDATE
- Event handlers 
- FETCH Display Data
- DELETE, POST and EDIT button
- REACT ROUTER /DEPARTMENT/MEMBERS /ABOUT US
- CARDS COMPONENT
- RESPONSIVE DESIGN

# Server Side

- Design two models and schema: "Department" and "Team Member"

```
const teamMemberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number 
})

const departmentSchema = new Schema({
  dptName: String,
  members: [teamMemberSchema]
})
```

# Routes

- GET all Department and team members data
- GET Department by name 
- GET ID of Department and team members 
- POST create a new Department and team members
- UPDATE Department and team members
- DELETE Department and team members


#### PostMVP 

# Client Side

- Styling

# Server Side

- Possible additional routes

## Components

| Component | Description | 
| --- | :---: |  
|NAV |Navigation to host routes | 
|CARDS | Display the data | 
|BUTTON | function for the events and CRUD actions  |
|MAIN | Housing the majority of content  |
|ABOUT  | Hosting About Me Description  |



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|NAV | H | 2 hrs| hr | hrs  |
|CARDS | H | 10 hrs| hr | hrs  |
|BUTTON | H| 6hrs| hrs | hrs  |
|MAIN | H | 2hrs | hrs | hrs |
|ABOUT  | H |1hrs |hrs | hrs  |


| Total | H | 21 hrs|  | |

## Additional Libraries
- React
- Express
- mongoose
- mongoDB



```

```
