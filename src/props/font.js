export const fontProps = {
    'ellipsis': {
        transform: {
            props: {
                ovX: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
        }
    },
    // 'noWrap': {
    //     transform: {
    //         props: {
    //             whiteSpace: 'no-wrap'
    //         }
    //     }
    // },
    'fontWeight': {
        aliases: ['font.weight'],
        key: 'font-weight'
    },
    'text.overflow': {
        aliases: [
            'text.ov',
            'textOverflow'
        ],
        key: 'text-overflow'
    },
    'whiteSpace': {
        key: 'white-space'
    }
}