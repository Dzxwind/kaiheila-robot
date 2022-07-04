import { bot } from 'init/client';
import { echoMenu } from './commands/echo/echo.menu';
import { dissMenu } from './commands/diss/diss.menu';
import { ffMenu } from './commands/ff/ff.menu';
import { ffxivMenu } from './commands/ff/ff.main.menu';

bot.messageSource.on('message', (e) => {
    bot.logger.debug(`received:`, e);
    // 如果想要在console里查看收到信息也可以用
    //console.log(e);
});

bot.addCommands(echoMenu);

bot.addCommands(ffxivMenu);

bot.addCommands(dissMenu);

bot.addCommands(ffMenu);

bot.addAlias(ffxivMenu, 'FF', 'FF14', 'ff14');

bot.connect();

bot.logger.debug('system init success');
