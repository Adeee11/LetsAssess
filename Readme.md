# LetAssess

LetAssess is an online assessment tool created to allow making online assessment easier.

## Description

### Motivation

Currently, all opensource tools available don't provide sufficient options while creating tests. You can't add code or images to the questions making assessments monotonous and incapable of properly assessing the candidate.

LetAssess was made to provide the solution to this problem.

### Technologies Used

#### Front-end

React, Styled-components

#### Back-end

Firebase, node-js, express

### Features Implemented

1. There's a custom component feature through which questions and options can be modified and displayed accordingly. For eg- if you want to display code in the question or on the options, you can set the custom component to true and provide values to display accordingly. Currently custom component works for code only.
2. You can select the multi-correct or single correct type for your questions.

### Feature to add in future

1. Provide functionality to make an assessment for a user, instead of currently adding data in a JSON file.
2. Adding various custom components choices

## Installation

For installing all the packages needed

```bash
yarn install
```

For running the project:

```bash
# Front-end
cd client
yarn start

# Back-end
cd server
yarn start

```
