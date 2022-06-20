import { AppCommand, AppFunc, BaseSession } from 'kbotify';

class DissMenu extends AppCommand {
    code = 'diss';
    trigger = '白白是个什么样的人';
    help = '我就是要先骂一下白白';
    intro = '骂白白';
    func: AppFunc<BaseSession> = async (session) => {
        // console.log(session) 可以在console里查看更多session提供的相关信息
        // 这些信息可以帮助你获取当前的信息发送者、当前信息发送者的频道等
        return session.reply('白白就是个臭傻逼！');
        // if (!session.args.length) {
        //     return session.reply(this.help);
        // }

        // return session.quote(`${session.args}`);
    };
}

export const dissMenu = new DissMenu();
