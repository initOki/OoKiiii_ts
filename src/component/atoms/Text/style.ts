import { styled } from '@stitches/react';

export const Text = styled('p', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '20px',

    a: {
        color: '#2f2f2f',
        textDecoration: 'none',
        fontSize: 'inherit',
    },

    variants: {
        textType: {
            title: {
                fontSize: '30px',
            },
            subTitle: {
                fontSize: '26px',
            },
            bodyText: {
                fontSize: '24px',
            },
            subBodyText: {
                fontSize: '20px',
            },
            explain: {
                fontSize: '14px',
            },
        },
        position: {
            left: {
                justifyContent: 'flex-start',
            },
            right: {
                justifyContent: 'flex-end',
            },
        },
    },
});
