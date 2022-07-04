import { Card, MenuCommand,AppFunc,BaseSession } from 'kbotify';
import { echoKmd } from './echo.kmd.app';

class EchoMenu extends MenuCommand {
    code = 'echo';
    trigger = 'echo';
    help = '如需测试KMarkDown请发送".echo kmd"';
    // func:AppFunc<BaseSession> = async (session) => {
    //     // console.log(session) 可以在console里查看更多session提供的相关信息
    //     // 这些信息可以帮助你获取当前的信息发送者、当前信息发送者的频道等
    //     if (!session.args.length) {
    //         return session.reply(this.help);
    //     }

    //     return session.quote(
    //         `[查询结果在这里：${session.args}](https://ff14.huijiwiki.com/index.php?search=${session.args})`
    //     );
    // };
    intro = '复读菜单';
    menu = new Card().addText('一些卡片里需要展示的东西').addTitle("测试标题").toString();
    // menu = new 
    useCardMenu = true; // 使用卡片菜单
    
}

export const echoMenu = new EchoMenu(echoKmd);
