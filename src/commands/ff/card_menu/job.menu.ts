import type { CardObject } from 'kbotify'
const jobMenu: CardObject[] =[
    {
      "type": "card",
      "theme": "secondary",
      "size": "lg",
      "modules": [
        {
          "type": "header",
          "text": {
            "type": "plain-text",
            "content": "FF14职业攻略(NGA)"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "kmarkdown",
            "content": "**近战输出**"
          }
        },
        {
          "type": "action-group",
          "elements": [
            {
              "type": "button",
              "theme": "primary",
              "value": "FF14-job-武僧",
              "click": "return-val",
              "text": {
                "type": "plain-text",
                "content": "武僧"
              }
            },
            {
              "type": "button",
              "theme": "primary",
              "value": "FF14-job-龙骑士",
              "click": "return-val",
              "text": {
                "type": "plain-text",
                "content": "龙骑士"
              }
            },{
              "type": "button",
              "theme": "primary",
              "value": "FF14-job-忍者",
              "click": "return-val",
              "text": {
                "type": "plain-text",
                "content": "忍者"
              }
            },
            {
              "type": "button",
              "theme": "primary",
              "value": "FF14-job-武士",
              "click": "return-val",
              "text": {
                "type": "plain-text",
                "content": "武士"
              }
            }
          ]
        },
        {
          "type": "action-group",
          "elements": [
            {
              "type": "button",
              "theme": "primary",
              "value": "FF14-job-钐镰客",
              "click": "return-val",
              "text": {
                "type": "plain-text",
                "content": "钐镰客"
              }
            }
          ]
        }
      ]
    }
  ];

export default jobMenu;
