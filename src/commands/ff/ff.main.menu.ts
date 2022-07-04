import { AppCommand, AppFunc, BaseSession, Card, TextMessage, ButtonEventMessage } from 'kbotify';
class FFXIVMenu extends AppCommand {
    code = 'FF14';
    trigger = 'FF14';
    help =
        '阿巴阿巴';

    intro = 'FF14飞机wiki查询';

    func: AppFunc<BaseSession> = async (session) => {
        // console.log(session) 可以在console里查看更多session提供的相关信息
        // 这些信息可以帮助你获取当前的信息发送者、当前信息发送者的频道等
        if (session.args.length) {
            ///判断是否查看的是攻略
            if (session.args[0] == "攻略") {
                ///职业精华帖
                return session.sendCard([
                    {
                      "type": "card",
                      "theme": "secondary",
                      "size": "lg",
                      "modules": [
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "近战输出"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[龙骑士](https://nga.178.com/read.php?tid=31313901)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[武僧](https://nga.178.com/read.php?tid=31059564)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[忍者](https://nga.178.com/read.php?tid=31436041)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[武士](https://nga.178.com/read.php?tid=29768514)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[钐镰客](https://nga.178.com/read.php?tid=29852043)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "divider"
                        },
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "远程输出"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[吟游诗人](https://nga.178.com/read.php?tid=30814293)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[机工士](https://nga.178.com/read.php?tid=29044895)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[舞者](https://shimo.im/docs/B1Aw140omGFpVZqm/read)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "divider"
                        },
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "法系输出"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[黑魔法师](https://nga.178.com/read.php?tid=30055418)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[召唤师](https://nga.178.com/read.php?tid=29725486)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[赤魔法师](https://nga.178.com/read.php?tid=28924308)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "divider"
                        },
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "治疗职业"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[白魔法师](https://nga.178.com/read.php?tid=31408900)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[占星术士](https://nga.178.com/read.php?tid=30990330)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[学者](https://nga.178.com/read.php?tid=31269351)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[贤者](https://nga.178.com/read.php?tid=29839272)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "divider"
                        },
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "防护职业"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[骑士](https://nga.178.com/read.php?tid=30003196)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[战士](https://nga.178.com/read.php?tid=32361086)**"
                              },
                              {
                                "type": "kmarkdown",
                                "content": "**[暗黑骑士](https://nga.178.com/read.php?tid=30410450)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "paragraph",
                            "cols": 3,
                            "fields": [
                              {
                                "type": "kmarkdown",
                                "content": "**[绝枪战士](https://nga.178.com/read.php?tid=31114564)**"
                              }
                            ]
                          }
                        },
                        {
                          "type": "divider"
                        },
                        {
                          "type": "header",
                          "text": {
                            "type": "plain-text",
                            "content": "大型副本攻略"
                          }
                        },
                        {
                          "type": "section",
                          "text": {
                            "type": "kmarkdown",
                            "content": "[普通万魔殿1-4(子言)](https://www.bilibili.com/video/BV1W34y1x7B3?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=5a2cf7d0c18e0fc14e5aee328097c36a)"
                          }
                        }
                      ]
                    }
                ]);
            }

            return session.quote(
                `**[WIKI查询结果:${session.args}](https://ff14.huijiwiki.com/index.php?search=${session.args})** \n**[NGA查询结果:${session.args}](https://nga.178.com/thread.php?key=${session.args}&fid=-362960,698,699,700,756,592)**`
            );
            // return session.reply(this.help);
        }

        return session.sendCard([
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
                            "type": "kmarkdown",
                            "content": "**[FF14 官网](https://ff.web.sdo.com/web8/index.html#/index)**\n**[FF14 NGA专区](https://nga.178.com/thread.php?fid=-362960&rand=2)**"
                        }
                    },
                    {
                        "type": "file",
                        "title": "ACT整合下载",
                        "src": "https://cafemenu-dl.xivcdn.com//act/update/download/3.9.4.0_sfx.exe",
                        "size": "61"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "plain-text",
                            "content": "小杨是网易的未来？"
                        },
                        "mode": "right",
                        "accessory": {
                            "type": "button",
                            "theme": "primary",
                            "text": {
                                "type": "plain-text",
                                "content": "完全同意"
                            }
                        }
                    }
                ]
            }
        ])
    };
    // checkInput: (sessionOrCommand: BaseSession, msg?: TextMessage | ButtonEventMessage | undefined) => {

    // };

}

export const ffxivMenu = new FFXIVMenu();
