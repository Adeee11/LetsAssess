const data2={
    "title":"JavaScript",
    "durationInMins":20,
    "questions":[
        {
            "quesId":1,
            "quesValue":"",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"function hungry() {\n   eatFruits();\n}\nfunction eat…s() {\n   return 'I'm eating fruits';\n}\n\nhungry();", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"Empty: hungry() → eatfruits(), hungry() →hungry() →Empty",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"Empty: hungry() → eatfruits(), hungry() →Empty →hungry()",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"Empty: hungry() → eatfruits(), hungry() →eatFruits() →Empty",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"No changes in call stack.",
                    "useCustomComponent":false,
                    "optionProps":null
                }
            ],
            "correctOption":"1"
        },

        {
            "quesId":2,
            "quesValue":"Which of the followings are the correct way to create an object?",
            "quesType":"mcq-m",
            "useCustomComponent":false,
            "props":{"type":"code", "content":"", "format":""},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"var object = Object.create(null);",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"var object = new Object();",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"var object = Person('Sudheer');",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"var object = {name: 'Mohan'}",
                    "useCustomComponent":false,
                    "optionProps":null
            }],
            "correctOption":[true, true, false, true]
        },
        {
            "quesId":3,
            "quesValue":"What will this print out?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"const obj = {\n    innerObj: {\n        x: 9\n    }\n}…nnerObj;\n\nz.x = 25;\n\nconsole.log(obj.innerObj.x);", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"9",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"25",
                    "useCustomComponent":false,
                    "optionProps":null
                }

               ],
               "correctOption":"2"
        },
        {
            "quesId":4,
            "quesValue":"What will this print out? ",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"const obj = {\n    arr: [{ x: 17 }]\n};\n\nlet z = obj…rr;\n\nz = [{ x: 25 }];\n\nconsole.log(obj.arr[0].x);", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"17",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"25",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"1"
        },
        {
            "quesId":5,
            "quesValue":"What will this print out? ",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"const obj = {\n    arr: []\n};\n\nobj.arr.push(17);\n\nconsole.log(obj.arr === [17]);", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"true",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"false",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"2"
        },
        {
            "quesId":6,
            "quesValue":"Output for the following code:",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"let a = 5;\n\nfunction foo() {\n   let a = 6;\n  conso…oo();\nbar();\nconsole.log('Outside Functions: ',a)", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"Inside Foo: 6\nInside Bar: 7\nOutside Functions: 7", "format":"output"},
                },
                {
                    "optionId":2,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"Inside Foo: 6\nInside Bar: 7\nOutside Functions: 5", "format":"output"},
                },
                {
                    "optionId":3,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"Inside Foo: 5\nInside Bar: 6\nOutside Functions: 7", "format":"output"},
                },
                {
                    "optionId":4,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"Inside Foo: 6\nInside Bar: 6\nOutside Functions: 7", "format":"output"},
                }
               ],
               "correctOption":"1"
        },
        {
            "quesId":7,
            "quesValue":"Output for the following code:",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"let obj = {\n\tfoo: function(){\n\t(this === window)\n\t…('obj')\t\t \n\t}\n}\n\nobj.foo()\nobj.foo().bind(window)", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"window obj",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"window window",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"obj obj",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"obj window",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"4"
        },
        {
            "quesId":8,
            "quesValue":"Output of the following code:",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"console.log((1+2,3,4))", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"4",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"3,3,4",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"10",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"3",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"1"
        },
        {
            "quesId":9,
            "quesValue":"How will import the functions sayHello and sayGoodbye in another file from this module? ",
            "quesType":"mcq-m",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"// lib.js\n\n// Export default function\nexport defau…ction sayGoodbye(){  \n  console.log('Goodbye');\n}", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"import { sayHello, sayGoodbye} from “./lib.js”",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"import  sayHello, {sayGoodbye} from “./lib.js”",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"import  sayHello as hello, {sayGoodbye} from “./lib.js”",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"import  sayHello, sayGoodbye from “./lib.js”",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":[false, true, true, false]
        },
        {
            "quesId":10,
            "quesValue":"What’s the output of the following code?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"function main(){\n  console.log('A');\n  setTimeout(…tart < (sec*1000)) {\n    now = Date.now();\n  }\n}\n", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"A C B",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"A B C",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"B A C",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"C B A",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"1"
        },
        {
            "quesId":11,
            "quesValue":"What’s the correct way to call this function after 3s?",
            "quesType":"mcq-m",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"function sayHi(phrase, who) {\n  alert( phrase + ', ' + who );\n}\n", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"setTimeout(sayHi, 3000, 'Hello', 'John');",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"setTimeout(sayHi('Hello', 'John'), 3000);",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"setTimeout(()=>sayHi('Hello', 'John'),3000 );",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"setTimeout(sayHi, 3000);",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":[true, false, true, false]
        },
        {
            "quesId":12,
            "quesValue":"How will you stop the following setInterval function after 10s?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"// repeat with the interval of 2 seconds\nlet timerId = setInterval(() => alert('tick'), 2000);", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"setTimeout(() => {\n        clearInterval(timerId);\n        alert('stop'); \n          }, 10000);", "format":"js"},
                },
                {
                    "optionId":2,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"setTimeout(() => {\n        stopInterval(timerId);\n        alert('stop'); \n          }, 10000);", "format":"js"},
                },
                {
                    "optionId":3,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"setTimeout(() => {\n        pauseInterval(timerId);\n        alert('stop'); \n          }, 10000);", "format":"js"},
                },
                {
                    "optionId":4,
                    "optionValue":"",
                    "useCustomComponent":true,
                    "optionProps":{"type":"code", "content":"setTimeout(() => {\n        removeInterval(timerId);\n        alert('stop'); \n          }, 10000);", "format":"js"},
                }
               ],
               "correctOption":"1"
        },
        {
            "quesId":13,
            "quesValue":"Which of the following are the node types in the document object in the browser?",
            "quesType":"mcq-m",
            "useCustomComponent":false,
            "props":null,
            "options":[
                {
                    "optionId":1,
                    "optionValue":"Element",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"Comment",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"Text",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"Quotation",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":[true, true, true, false]
        },
        {
            "quesId":14,
            "quesValue":"What is the output of the following code:",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"const obj={ a:1, b:2, c:{d:3}};\n\n           const …c.d=4 ;\n\n           console.log(obj.a, obj.c.d) ;", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"1, 3",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"1, 4",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"10, 3",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"10, 4",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"2"
        },
        {
            "quesId":15,
            "quesValue":"Which code line would successfully cancel an event?",
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
            "options":[
                {
                    "optionId":1,
                    "optionValue":"window.event.returnValue=false;",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"return false;",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"window.event.Return()",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"window.Stop()",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"2"
        },
        {
            "quesId":16,
            "quesValue":"What is the output of the following code?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"let arr=[1, 'Hello World', {x:2}, [3,4]];\ndelete arr[1];\nconsole.log(arr.length)", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"3",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"4",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"5",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"Error",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"2"
        },
        {
            "quesId":17,
            "quesValue":"To have a script run continually every 30 seconds, which line of code should be used?",
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
            "options":[
                {
                    "optionId":1,
                    "optionValue":"wsConnection.repeatWork('workerFile.js', 30000);",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"setTimeout(function(){worker.postMessage('')},30000);",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"setTimeout(worker.postMessage(''), 30000)",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"setInterval(function(){worker.postMessage('')}, 30000)",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"4"
        },
        {
            "quesId":18,
            "quesValue":"What’s the output of the following code?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"let a = 5;\nlet b = 6;\nlet c = '7';\n\nconsole.log(a+b+c);", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"567",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"117",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"18",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"123",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"2"
        },
        {
            "quesId":19,
            "quesValue":"What’s the output of the following code?",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"// first part\nconst a = ['Hello'];\nconst b = ['Hel…le.log(a===b)\n\n// second part\nconsole.log(5=='5')", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"true true",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"true false",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"false true",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"false false",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"3"
        },
        {
            "quesId":20,
            "quesValue":"Output of the following code:",
            "quesType":"mcq",
            "useCustomComponent":true,
            "props":{"type":"code", "content":"(function(){\n\tconsole.log('Hello world')\n})()", "format":"js"},
            "options":[
                {
                    "optionId":1,
                    "optionValue":"Hello world",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":2,
                    "optionValue":"No output as the function isn’t called",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":3,
                    "optionValue":"Syntax Error",
                    "useCustomComponent":false,
                    "optionProps":null
                },
                {
                    "optionId":4,
                    "optionValue":"undefined",
                    "useCustomComponent":false,
                    "optionProps":null
                }
               ],
               "correctOption":"1"
        }

    ]
}

const data = {

    title: "HTML and CSS",
    durationInMins: 20,
    questions:
        [
            {
                "quesId":1,
                "quesValue": "In below code snippet, in what order will the margins be added?",
                     
                "quesType":"mcq",
                "useCustomComponent":true,
                "props":{"type": "code", "content": "p {\n      margin: 25px 50px 75px 100px:\n  }", "format": "css"},
                "options": [
                    {
                        "optionId":1,
                        "optionValue":"Top, Right, Bottom, Left",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":2,
                        "optionValue":"Top, Left, Bottom, Right",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":3,
                        "optionValue":"Top, Bottom, Right, Left",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":4,
                        "optionValue":"Right, Left, Top, Bottom",
                        "useCustomComponent":false,
                        "optionProps":null
                    }
                ],
                "correctOption":1
            },
            {
                "quesId":2,
                "quesValue": "You are working on a form. You want to allow users to make multiple selections. Select the best control.",
                "quesType":"mcq",
                "useCustomComponent":false,
                "props":null,
                "options": [
                    {   
                        "optionId":1, 
                        "optionValue":"Radio button",
                        "useCustomComponent":false,
                        "optionProps":null
                    }, 
                        {
                            "optionId":2,
                            "optionValue":"textArea",
                            "useCustomComponent":false,
                        "optionProps":null
                        }, 
                        {
                            "optionId":3,
                            "optionValue":"Checkbox",
                            "useCustomComponent":false,
                        "optionProps":null
                        }, 
                        {
                            "optionId":4,
                            "optionValue":"Radio or checkbox",
                            "useCustomComponent":false,
                        "optionProps":null
                        }],
                "correctOption": 3
            },
            {
                "quesValue": "How can you ensure that all necessary fields are populated before a form can be submitted?",
                "quesId":3,
                "quesType":"mcq",
                "useCustomComponent":false,
                "props":null,
                "options": [
                    { "useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"Write a JavaScript function to evaluate all the controls on the form of content.",},
                    {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"On the server , evaluates all the controls for data and returns an error page for missing content."},
                    {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"Add the required attribute on each control so the user gets a message that the field is required."},
                    {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"Add a label to the page to let users know which controls they must fill in."}],
                    "correctOption":3
                },
            { "quesId":4,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which of the following CSS properties can be used for hiding an element in the DOM without changing the layout of the page?",
                "options": [
                     {"useCustomComponent":true,"optionProps":{"type": "code", "content": 'display:none', "format": "css"},"optionId":1,"optionValue":"display:none"}, 
                     {"useCustomComponent":true,"optionProps":{"type": "code", "content": 'visibility:none', "format": "css"},"optionId":2,"optionValue":"visibility:none"}, 
                     {"useCustomComponent":true,"optionProps":{"type": "code", "content": 'visibility:hidden', "format": "css"},"optionId":3,"optionValue":"visibility:hidden"}, 
                     {"useCustomComponent":true,"optionProps":{"type": "code", "content": 'display:hidden', "format": "css"},"optionId":4,"optionValue":"display:hidden"}
                ],
                "correctOption": 3
            },
            { "quesId":5,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which of the following statements will apply a box shadow to the right and bottom edge of a div element?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"box-shadow: black 5px 5px;"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"box-shadow: black -5px 5px;"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"box-shadow: black 5px -5px;"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"box-shadow: black -5px -5px;"}],
                "correctOption": 1
            },
            { "quesId":6,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which of the following CSS property for position would place an element relative to the browser window?",
                "options": [
                   {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"Absolute"},
                   {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"Fixed"},
                   {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"Relative"},
                   {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"None of the above"}
                ],
                "correctOption": 2
            },
            { "quesId":7,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Absolute positioning positions an object relative to what?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"The top-left corner of the browser window"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"The top-left corner of its parent element"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"Centered inside the window"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"Centered inside its parent element"}],
                "correctOption": 2
            },
            { "quesId":8,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which transformation enables you to change the size of an element?",
                "options": [
                        {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"rotate"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"skew"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"translate"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"scale"}],
                "correctOption": 4
            },
            { "quesId":9,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "You are working with the web storage api. You want to ensure that the data you stored is cleared when the user closes the browser. Where should you store it?",
                "options": [
                       {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"LocalStorage"}, 
                       {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"cookieStorage"},
                       {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"sessionStorage"},
                       {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"A hidden input element"}],
                "correctOption": 3
            },
            { "quesId":10,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "You are working on a web page . you are looking from the outside edge of an element and moving to the inside edge. Select the right order that the padding, margin, and border occur in?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"padding, border, margin"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"margin, border, padding"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"border, padding, margin"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"margin, padding, border"}],
                "correctOption": 2
            },
            { "quesId":11,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which of the following is the way to configure the amount of space between words?",
                "options": [
                        {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"word-margin"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"letter-margin"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"word-spacing"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"word-padding"}],
                "correctOption": 3
            },
            { "quesId":12,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "How can you create a semi-transparent background color?",
                "options": [

                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"background-color: rgba(0,0,0,0.5);"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"background-color: rgbx(0,0,0,0.5);"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"background-color: hsl(0,0,0,0.5);"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"background-color: rgba(0,0,0,1);"}
                ],
                "correctOption": 1
            },
            { "quesId":13,
            "quesType":"mcq",
            "useCustomComponent":true,
                "props":{"type": "code", "content": "<body>\n\n    <p class=\"rem\">paragraph rem element</p>\n\n    <p class=\"em\">paragraph em element</p>\n\n</body>", "format": "css"},
                "quesValue": "Using the following HTML and CSS example, what will the equivalent pixel value be for the .em and .rem elements?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"the .rem value will be equivalent to 15px, the .em value will be 40 px."},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"the .rem value will be equivalent to 15px, the .em value will be 20 px."},
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"the .rem value will be equivalent to 25px, the .em value will be 20 px."},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"the .rem value will be equivalent to 20px, the .em value will be 40 px."}
                    ],
                "correctOption": 1
            },
            { "quesId":14,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "What are the uses of CSS pseudo-elements?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"Style specified parts of an element."},
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"Style the first letter or line of an element."}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"insert content before or after the element."},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"All of the above."}
                ],
                "correctOption":4
            },
            { "quesId":15,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Which of the following CSS properties specifies the stack order of elements?",
                "options": [
                        {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"z-index"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"overlap"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"No such specific property is present"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"None of the above"}
                    ],
                "correctOption": 1
            },
            { "quesId":16,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "The CSS property used to specify the transparency of an element is?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"opacity"}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"visibility"}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"filter"},
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"None of the above"}],
                "correctOption": 1
            },
            { "quesId":17,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "Can negative values be allowed in padding property?",
                "options": [
                     {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"Yes"}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"No"}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"Depends on property"}, 
                     {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"None of the above"}],
                "correctOption": 2
            },
            {
                "quesId":18,
                "quesValue": "What will be the width of the div element given below?",                     
                "quesType":"mcq",
                "useCustomComponent":true,
                "props":{"type": "code", "content": 'div{\n      width: 310px;\n      padding: 20px;\n      border: 5px solid blue;\n      margin: 0;\n}', "format": "css"},
                "options": [
                    {
                        "optionId":1,
                        "optionValue":"310px",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":2,
                        "optionValue":"350px",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":3,
                        "optionValue":"355px",
                        "useCustomComponent":false,
                        "optionProps":null
                    },
                    {
                        "optionId":4,
                        "optionValue":"360px",
                        "useCustomComponent":false,
                        "optionProps":null
                    }
                ],
                "correctOption":4
            },
            { "quesId":19,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "What is the speciality about the <small> and <big> tags in HTML",
                "options": [
                        {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"They work on anything"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"They can be used for text only"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"They can be repeated"},
                        {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"None of the above"}],
                "correctOption": 3
            },
            { "quesId":20,
            "quesType":"mcq",
            "useCustomComponent":false,
            "props":null,
                "quesValue": "What is the correct order to effectively apply CSS.",
                "options": [
                       {"useCustomComponent":false,"optionProps":null,"optionId":1,"optionValue":"a:link, a:visited, a:hover, a:acitive"},
                       {"useCustomComponent":false,"optionProps":null,"optionId":2,"optionValue":"a:acitive, a:hover, a:link, a:visited"},
                       {"useCustomComponent":false,"optionProps":null,"optionId":3,"optionValue":"a:hover, a:visited, a:link, a:acitive"},
                       {"useCustomComponent":false,"optionProps":null,"optionId":4,"optionValue":"a:visited, a:link, a:active, a:hover"}],
                "correctOption": 1
            },
            

        ]
}

export { data};
