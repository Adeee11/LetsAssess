# API Documentation

## Collections

### Assessment

Store all details about an assessment. The document of this collection represents a particular assessment. The id of the document gives us an idea of the assessment

### Submissions

Stores all the submissions of candidates about a particular assessment. Here the id of the document tells us the assessment name. Inside the document, the candidate's submission is stored, with each candidateId becoming a key and storing submission details of that candidate.

### Candidates

Stores the details of a candidate. Each document is a different candidate and inside the document candidate name, his email and tests taken and their scores are stored.

## API Endpoints

### Assessment

#### POST /assessment

Add all the details of an assessment. Used when creating a new assessment.

##### Body

```json
{
 "title": "JavaScript",
 "durationInMins": 20,
 "questions": [
   {
     "quesId": "some id",
     "quesValue": "some value",
     "quesType": "mcq or mcq-m",
     "correctOption": ["optionid"],
     "options": [
       {
         "optionId": "someId",
         "optionProps": " same as prop below",
         "optionValue": "some value",
         "useCustomComponent": false,
       },
     ],
     "props": {
       "content": "some content",
       "format": "most probably file extension",
       "type": "type of custom component. eg - code",
     },
   },
 ],
};

```

#### POST /assessment/question

Add a question to an existing assessment.

##### Body

```json
{
  "title": "code-quality",
  "question": {
    "quesId": "some id 2",
    "quesValue": "some value",
    "quesType": "mcq or mcq-m",
    "correctOption": ["optionid"],
    "options": [
      {
        "optionId": "someId",
        "optionProps": " same as prop below",
        "optionValue": "some value",
        "useCustomComponent": false
      }
    ],
    "props": {
      "content": "some content",
      "format": "most probably file extension",
      "type": "type of custom component. eg - code"
    }
  }
}
```

#### GET /assessment (AUTHENTICATION REQUIRED)

Get basic details of all assessments present in the database. (Title along with the time taken)

#### GET /assessment/:id/questions (AUTHENTICATION REQUIRED)

Get assessment without correct option field. Can be used to get all questions for an assessment

### Submission

#### POST /submission (AUTHENTICATION REQUIRED)

Add submission of all candidates for an assessment. Most probably would be used to set up an assessment submission at the start

##### Body data

```json
{
  "assessmentId": "react",
  "data": {
    "example3gmailcom": {
      "optionsMarked": {
        "quesId1": ["1"],
        "quesId2": ["2", "3"]
      }
    },
    "example2gmailcom": {
      "optionsMarked": {
        "quesId1": ["1"],
        "quesId2": ["2", "3"]
      }
    }
  }
}
```

#### POST /submission/candidate (AUTHENTICATION REQUIRED)

Add submission of a candidate for an assessment.

##### Body data

```json
{
  "assessmentId": "react",
  "data": {
    "candidateName": "nitin",
    "optionsMarked": {
      "quesId1": ["opid1", "opid2"]
    }
  }
}
```

#### POST /submission/answer (AUTHENTICATION REQUIRED)

Add an answer to a question for a candidate giving an assessment

##### Body data

```json
{
  "assessmentId": "react",
  "optionMarked": {
    "optionId": ["1", "2", "3"],
    "quesId": "quesId6"
  }
}
```

#### GET /submission/:id

For fetching all candidates who submitted an assessment

#### GET /submission/options-marked/:assessment

Return index of latest question marked for that assessment and all the optionsMarked along with the quesID

### Candidate

#### POST /candidate

Add a candidate’s details to the database

##### Body data

```json
{
  "email": "hello@gmail.com",
  "candidateName": "Nitin Pandey"
}
```

#### POST /candidate/marks

Calculate marks for an assessment for a candidate and add assessment details to the candidate’s data

##### Body data

```json
{
  "email": "nitingmailcom",
  "assessmentId": "git"
}
```

#### GET /candidate/:id/assessments

Get all assessments done by a candidate

### Authentication

#### POST /authenticate

Returns a jwt token, with an expiry time.

##### Body Data

```json
{
  "name": "nitin",
  "email": "nitin@gmail.com"
}
```
