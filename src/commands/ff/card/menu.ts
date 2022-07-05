import type { CardObject } from 'kbotify'
const menuSchema: CardObject[] = [
    {
        type: 'card',
        theme: 'secondary',
        size: 'lg',
        modules: [
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '最终幻想14相关',
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'section',
                text: {
                    type: 'kmarkdown',
                    content:
                        '**[FF14 官网](https://ff.web.sdo.com/web8/index.html#/index)**\n**[FF14 NGA专区](https://nga.178.com/thread.php?fid=-362960&rand=2)**',
                },
            },
            {
                type: 'file',
                title: 'ACT整合下载',
                src: 'https://cafemenu-dl.xivcdn.com//act/update/download/3.9.4.0_sfx.exe',
                size: '61',
            },
            {
                type: 'section',
                text: {
                    type: 'plain-text',
                    content: '小杨是网易的未来？',
                },
                mode: 'right',
                accessory: {
                    type: 'button',
                    theme: 'primary',
                    text: {
                        type: 'plain-text',
                        content: '完全同意',
                    },
                },
            },
        ],
    },
];

export default menuSchema;
