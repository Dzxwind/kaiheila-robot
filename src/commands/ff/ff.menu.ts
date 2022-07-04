import { AppCommand, AppFunc, BaseSession, Card } from 'kbotify';

class FFMenu extends AppCommand {
    code = 'ffd';
    trigger = 'ffd';
    help =
        '请在ff后加个空格再输入关键词，我会带你去飞机wiki，不用谢我，我是雷锋——Dzxwind';

    intro = 'FF14飞机wiki查询';
    func: AppFunc<BaseSession> = async (session) => {
        // console.log(session) 可以在console里查看更多session提供的相关信息
        // 这些信息可以帮助你获取当前的信息发送者、当前信息发送者的频道等
        if (!session.args.length) {
            return session.reply(this.help);
        }

        return session.quote(
            `[查询结果在这里：${session.args}](https://ff14.huijiwiki.com/index.php?search=${session.args})`
        );
    };
}

export const ffMenu = new FFMenu();
