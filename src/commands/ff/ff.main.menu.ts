import { AppCommand, AppFunc, BaseSession, Card, TextMessage, ButtonEventMessage } from 'kbotify';
import {raiderSchema, menuSchema} from './card'
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
                return session.sendCard(raiderSchema);
            }

            return session.quote(
                `**[WIKI查询结果:${session.args}](https://ff14.huijiwiki.com/index.php?search=${session.args})** \n**[NGA查询结果:${session.args}](https://nga.178.com/thread.php?key=${session.args}&fid=-362960,698,699,700,756,592)**`
            );
            // return session.reply(this.help);
        }

        return session.sendCard(menuSchema)
    };
    // checkInput: (sessionOrCommand: BaseSession, msg?: TextMessage | ButtonEventMessage | undefined) => {

    // };

}

export const ffxivMenu = new FFXIVMenu();
