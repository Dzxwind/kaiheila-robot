import type { CardObject } from 'kbotify'
const MainMenu: CardObject[] = [
    {
      "type": "card",
      "theme": "secondary",
      "size": "lg",
      "modules": [
        {
          "type": "header",
          "text": {
            "type": "plain-text",
            "content": "最终幻想14相关"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "paragraph",
            "cols": 3,
            "fields": [
              {
                "type": "kmarkdown",
                "content": "**[FF14 官网](https://ff.web.sdo.com/web8/index.html#/index)**"
              },
              {
                "type": "kmarkdown",
                "content": "**[FF14 NGA专区](https://nga.178.com/thread.php?fid=-362960&rand=2)**"
              },
              {
                "type": "kmarkdown",
                "content": "**[光之收藏家](https://www.ffxivsc.cn/#/)**"
              }
            ]
          }
        },
        {
          "type": "action-group",
          "elements": [
            {
              "type": "button",
              "theme": "primary",
                  "value": "FF14-job",
                  "click": "return-val",
              "text": {
                  "type": "plain-text",
                  
                "content": "查看战斗职业攻略"
              }
            },
            {
              "type": "button",
              "theme": "primary",
              "value": "FF14-raid",
              "text": {
                "type": "plain-text",
                "content": "查看6.x副本攻略"
              }
            }
          ]
        },
        {
          "type": "file",
          "title": "ACT整合下载",
          "src": "https://cafemenu-dl.xivcdn.com//act/update/download/3.9.4.0_sfx.exe",
          "size": "61"
        }
        
      ]
    }
  ];

export default MainMenu;
