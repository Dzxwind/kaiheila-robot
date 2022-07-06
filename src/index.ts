import { bot } from 'init/client';
import { echoMenu } from './commands/echo/echo.menu';
import { dissMenu } from './commands/diss/diss.menu';
import { ffMenu } from './commands/ff/ff.menu';
import { ffxivMenu } from './commands/ff/ff.main.menu';
import { ButtonEventMessage, BaseSession, KBotify, } from 'kbotify'
import { ButtonClickEvent, UserInGuild } from 'kaiheila-bot-root';

bot.messageSource.on('message', (e) => {
    bot.logger.debug(`received:`, e);
    // 如果想要在console里查看收到信息也可以用
    //console.log(e);
});

bot.addCommands(echoMenu);

bot.addCommands(ffxivMenu);

bot.addCommands(dissMenu);

bot.addCommands(ffMenu);

bot.addCommands();

bot.addAlias(ffxivMenu, 'FF', 'FF14', 'ff14');

bot.on('buttonClick', async (e) => {
    console.log(e);
    if (e.value.toLowerCase().includes("ff14-")) {
        bot.execute('FF14',  [e.value] , new ButtonEventMessage(e, bot));
    } else if(e.value.toLowerCase().includes("WOW-")){
        
    } else if (e.value.toLowerCase().includes("APEX-")) {
        
    }

})

bot.connect();

bot.logger.debug('system init success');


