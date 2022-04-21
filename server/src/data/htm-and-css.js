const htmlAndCss = {
    "title": "HTML and CSS",
    "durationInMins": 20,
    "questions": [
        {
            "quesId": "1",
            "quesValue": "In below code snippet, in what order will the margins be added?",
            "quesType": "mcq",
            "useCustomComponent": true,
            "props": {
                "type": "code",
                "content": "p {\n      margin: 25px 50px 75px 100px:\n  }",
                "format": "css"
            },
            "options": [
                {
                    "optionId": "1",
                    "optionValue": "Top, Right, Bottom, Left",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "2",
                    "optionValue": "Top, Left, Bottom, Right",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "3",
                    "optionValue": "Top, Bottom, Right, Left",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "4",
                    "optionValue": "Right, Left, Top, Bottom",
                    "useCustomComponent": false,
                    "optionProps": null
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "2",
            "quesValue": "You are working on a form. You want to allow users to make multiple selections. Select the best control.",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "options": [
                {
                    "optionId": "1",
                    "optionValue": "Radio button",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "2",
                    "optionValue": "textArea",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "3",
                    "optionValue": "Checkbox",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "4",
                    "optionValue": "Radio or checkbox",
                    "useCustomComponent": false,
                    "optionProps": null
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesValue": "How can you ensure that all necessary fields are populated before a form can be submitted?",
            "quesId": "3",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "Write a JavaScript function to evaluate all the controls on the form of content."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "On the server , evaluates all the controls for data and returns an error page for missing content."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "Add the required attribute on each control so the user gets a message that the field is required."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "Add a label to the page to let users know which controls they must fill in."
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesId": "4",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which of the following CSS properties can be used for hiding an element in the DOM without changing the layout of the page?",
            "options": [
                {
                    "useCustomComponent": true,
                    "optionProps": {
                        "type": "code",
                        "content": "display:none",
                        "format": "css"
                    },
                    "optionId": "1",
                    "optionValue": "display:none"
                },
                {
                    "useCustomComponent": true,
                    "optionProps": {
                        "type": "code",
                        "content": "visibility:none",
                        "format": "css"
                    },
                    "optionId": "2",
                    "optionValue": "visibility:none"
                },
                {
                    "useCustomComponent": true,
                    "optionProps": {
                        "type": "code",
                        "content": "visibility:hidden",
                        "format": "css"
                    },
                    "optionId": "3",
                    "optionValue": "visibility:hidden"
                },
                {
                    "useCustomComponent": true,
                    "optionProps": {
                        "type": "code",
                        "content": "display:hidden",
                        "format": "css"
                    },
                    "optionId": "4",
                    "optionValue": "display:hidden"
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesId": "5",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which of the following statements will apply a box shadow to the right and bottom edge of a div element?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "box-shadow: black 5px 5px;"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "box-shadow: black -5px 5px;"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "box-shadow: black 5px -5px;"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "box-shadow: black -5px -5px;"
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "6",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which of the following CSS property for position would place an element relative to the browser window?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "Absolute"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "Fixed"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "Relative"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "None of the above"
                }
            ],
            "correctOption": [
                "2"
            ]
        },
        {
            "quesId": "7",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Absolute positioning positions an object relative to what?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "The top-left corner of the browser window"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "The top-left corner of its parent element"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "Centered inside the window"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "Centered inside its parent element"
                }
            ],
            "correctOption": [
                "2"
            ]
        },
        {
            "quesId": "8",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which transformation enables you to change the size of an element?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "rotate"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "skew"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "translate"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "scale"
                }
            ],
            "correctOption": [
                "4"
            ]
        },
        {
            "quesId": "9",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "You are working with the web storage api. You want to ensure that the data you stored is cleared when the user closes the browser. Where should you store it?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "LocalStorage"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "cookieStorage"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "sessionStorage"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "A hidden input element"
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesId": "10",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "You are working on a web page . you are looking from the outside edge of an element and moving to the inside edge. Select the right order that the padding, margin, and border occur in?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "padding, border, margin"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "margin, border, padding"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "border, padding, margin"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "margin, padding, border"
                }
            ],
            "correctOption": [
                "2"
            ]
        },
        {
            "quesId": "11",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which of the following is the way to configure the amount of space between words?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "word-margin"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "letter-margin"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "word-spacing"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "word-padding"
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesId": "12",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "How can you create a semi-transparent background color?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "background-color: rgba(0,0,0,0.5);"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "background-color: rgbx(0,0,0,0.5);"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "background-color: hsl(0,0,0,0.5);"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "background-color: rgba(0,0,0,1);"
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "13",
            "quesType": "mcq",
            "useCustomComponent": true,
            "props": {
                "type": "code",
                "content": "<body>\n\n    <p class=\"rem\">paragraph rem element</p>\n\n    <p class=\"em\">paragraph em element</p>\n\n</body>",
                "format": "css"
            },
            "quesValue": "Using the following HTML and CSS example, what will the equivalent pixel value be for the .em and .rem elements?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "the .rem value will be equivalent to 15px, the .em value will be 40 px."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "the .rem value will be equivalent to 15px, the .em value will be 20 px."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "the .rem value will be equivalent to 25px, the .em value will be 20 px."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "the .rem value will be equivalent to 20px, the .em value will be 40 px."
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "14",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "What are the uses of CSS pseudo-elements?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "Style specified parts of an element."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "Style the first letter or line of an element."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "insert content before or after the element."
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": 4,
                    "optionValue": "All of the above."
                }
            ],
            "correctOption": [
                "4"
            ]
        },
        {
            "quesId": "15",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Which of the following CSS properties specifies the stack order of elements?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "z-index"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "overlap"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "No such specific property is present"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "None of the above"
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "16",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "The CSS property used to specify the transparency of an element is?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "opacity"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "visibility"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "filter"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "None of the above"
                }
            ],
            "correctOption": [
                "1"
            ]
        },
        {
            "quesId": "17",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "Can negative values be allowed in padding property?",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "Yes"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "No"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "Depends on property"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "None of the above"
                }
            ],
            "correctOption": [
                "2"
            ]
        },
        {
            "quesId": "18",
            "quesValue": "What will be the width of the div element given below?",
            "quesType": "mcq",
            "useCustomComponent": true,
            "props": {
                "type": "code",
                "content": "div{\n      width: 310px;\n      padding: 20px;\n      border: 5px solid blue;\n      margin: 0;\n}",
                "format": "css"
            },
            "options": [
                {
                    "optionId": "1",
                    "optionValue": "310px",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "2",
                    "optionValue": "350px",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "3",
                    "optionValue": "355px",
                    "useCustomComponent": false,
                    "optionProps": null
                },
                {
                    "optionId": "4",
                    "optionValue": "360px",
                    "useCustomComponent": false,
                    "optionProps": null
                }
            ],
            "correctOption": [
                "4"
            ]
        },
        {
            "quesId": "19",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "What is the speciality about the <small> and <big> tags in HTML",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "They work on anything"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "They can be used for text only"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "They can be repeated"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "None of the above"
                }
            ],
            "correctOption": [
                "3"
            ]
        },
        {
            "quesId": "20",
            "quesType": "mcq",
            "useCustomComponent": false,
            "props": null,
            "quesValue": "What is the correct order to effectively apply CSS.",
            "options": [
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "1",
                    "optionValue": "a:link, a:visited, a:hover, a:acitive"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "2",
                    "optionValue": "a:acitive, a:hover, a:link, a:visited"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "3",
                    "optionValue": "a:hover, a:visited, a:link, a:acitive"
                },
                {
                    "useCustomComponent": false,
                    "optionProps": null,
                    "optionId": "4",
                    "optionValue": "a:visited, a:link, a:active, a:hover"
                }
            ],
            "correctOption": [
                [
                    "1"
                ]
            ]
        }
    ]
}