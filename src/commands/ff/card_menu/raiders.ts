import type { CardObject } from 'kbotify'
const raidersSchema: CardObject[] = [
    {
        type: 'card',
        theme: 'secondary',
        size: 'lg',
        modules: [
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '近战输出',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[龙骑士](https://nga.178.com/read.php?tid=31313901)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[武僧](https://nga.178.com/read.php?tid=31059564)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[忍者](https://nga.178.com/read.php?tid=31436041)**',
                        },
                    ],
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[武士](https://nga.178.com/read.php?tid=29768514)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[钐镰客](https://nga.178.com/read.php?tid=29852043)**',
                        },
                    ],
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '远程输出',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[吟游诗人](https://nga.178.com/read.php?tid=30814293)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[机工士](https://nga.178.com/read.php?tid=29044895)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[舞者](https://shimo.im/docs/B1Aw140omGFpVZqm/read)**',
                        },
                    ],
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '法系输出',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[黑魔法师](https://nga.178.com/read.php?tid=30055418)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[召唤师](https://nga.178.com/read.php?tid=29725486)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[赤魔法师](https://nga.178.com/read.php?tid=28924308)**',
                        },
                    ],
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '治疗职业',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[白魔法师](https://nga.178.com/read.php?tid=31408900)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[占星术士](https://nga.178.com/read.php?tid=30990330)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[学者](https://nga.178.com/read.php?tid=31269351)**',
                        },
                    ],
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[贤者](https://nga.178.com/read.php?tid=29839272)**',
                        },
                    ],
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '防护职业',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[骑士](https://nga.178.com/read.php?tid=30003196)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[战士](https://nga.178.com/read.php?tid=32361086)**',
                        },
                        {
                            type: 'kmarkdown',
                            content:
                                '**[暗黑骑士](https://nga.178.com/read.php?tid=30410450)**',
                        },
                    ],
                },
            },
            {
                type: 'section',
                text: {
                    type: 'paragraph',
                    cols: 3,
                    fields: [
                        {
                            type: 'kmarkdown',
                            content:
                                '**[绝枪战士](https://nga.178.com/read.php?tid=31114564)**',
                        },
                    ],
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'header',
                text: {
                    type: 'plain-text',
                    content: '大型副本攻略',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'kmarkdown',
                    content:
                        '[普通万魔殿1-4(子言)](https://www.bilibili.com/video/BV1W34y1x7B3?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=5a2cf7d0c18e0fc14e5aee328097c36a)',
                },
            },
        ],
    },
];

export default raidersSchema