import { AppCommand, AppFunc, BaseSession, Card,TextMessage,ButtonEventMessage } from 'kbotify';
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
            ///职业精华帖
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
