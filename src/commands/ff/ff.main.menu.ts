import { AppCommand, AppFunc, BaseSession, Card, TextMessage, ButtonEventMessage } from 'kbotify';
import { RaidMneu, MainMenu, JobMenu } from './card_menu'
class FFXIVMenu extends AppCommand {
    code = 'FF14';
    trigger = 'FF14';
    help =
        '阿巴阿巴';

    intro = 'FF14飞机wiki查询';

    func: AppFunc<BaseSession> = async (session) => {
        ///如果有参数则进入分流
        ///如果没有参数则返回FF14主菜单
        if (session.args.length) {
            var args = session.args[0];
            ///判断返回的菜单类型
            var menuType = ff14BtnType(args);
            switch (menuType) {
                case mainMenuEnum.job:
                    console.log("进入job");
                    var temp_split = args.split("-");
                    console.log(temp_split);
                    ///如果长度不到3 则说明格式为[FF14-JOB] 本次触发为主菜单
                    if (temp_split.length < 3) {
                        return session.sendCard(JobMenu);
                    }
                    switch (temp_split[2]) {
                        case "龙骑士":
                            
                            return session.sendCard([
                                {
                                  "type": "card",
                                  "theme": "secondary",
                                  "size": "lg",
                                  "modules": [
                                    {
                                      "type": "section",
                                      "text": {
                                        "type": "kmarkdown",
                                        "content": "[6.0 新手指北龙骑攻略](https://nga.178.com/read.php?tid=31313901)"
                                      }
                                    },
                                    {
                                      "type": "section",
                                      "text": {
                                        "type": "kmarkdown",
                                        "content": "[万魔殿P1S-P4S龙骑个人小抄](https://nga.178.com/read.php?tid=30679440)"
                                      }
                                    }
                                  ]
                                }
                              ]);
                        case "武僧":
                            return session.sendCard(JobMenu);
                        case "忍者":
                            return session.sendCard([
                                {
                                  "type": "card",
                                  "theme": "secondary",
                                  "size": "lg",
                                  "modules": [
                                    {
                                      "type": "section",
                                      "text": {
                                        "type": "kmarkdown",
                                        "content": "[忍者PVE指南](https://nga.178.com/read.php?tid=31436041)"
                                      }
                                    },
                                    {
                                      "type": "section",
                                      "text": {
                                        "type": "kmarkdown",
                                        "content": "[*月与影*—忍者攻略](https://nga.178.com/read.php?tid=30481211)"
                                      }
                                    },
                                    {
                                      "type": "section",
                                      "text": {
                                        "type": "kmarkdown",
                                        "content": "[6.05忍者万魔殿小抄](https://nga.178.com/read.php?tid=30341906)"
                                      }
                                    }
                                  ]
                                }
                              ]);
                        case "武士":
                            return session.sendCard(JobMenu);
                        case "钐镰客":
                            return session.sendCard(JobMenu);
                            
                    }
                    return;
                case mainMenuEnum.raid:
                    console.log("进入raid");

                    //TODO:待更改
                    return session.sendCard(RaidMneu);
                default:
                    console.log("进入default");

                    return session.sendCard(JobMenu);
            }
            // if (session.args[0] == "攻略") {
            //     ///职业精华帖
            //     return session.sendCard(raiderSchema);
            // }

            return session.quote(
                `**[WIKI查询结果:${session.args}](https://ff14.huijiwiki.com/index.php?search=${session.args})** \n**[NGA查询结果:${session.args}](https://nga.178.com/thread.php?key=${session.args}&fid=-362960,698,699,700,756,592)**`
            );
            // return session.reply(this.help);
        }

        return session.sendCard(MainMenu)
    };
    // checkInput: (BaseSession, msg?: TextMessage | ButtonEventMessage | undefined) => {

    // };

}
const ff14BtnType = (value: String): mainMenuEnum => {
    if (value.includes("job-")) {
        return mainMenuEnum.job;
    } else if (value.includes("raid-")) {
        return mainMenuEnum.raid;
    } else {
        return mainMenuEnum.main;
    }
}
enum mainMenuEnum {

    main,
    job,
    raid,
}
export const ffxivMenu = new FFXIVMenu();
