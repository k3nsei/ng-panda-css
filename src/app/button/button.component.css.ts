import { cva, RecipeVariantProps } from 'styled-system/css';

export const buttonRecipe = cva({
  base: {
    minInlineSize: '64px',
    blockSize: '32px',
    paddingInline: '16px',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'visible',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    boxShadow: `
      0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12)
    `,
    backgroundColor: '#fff',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 'inherit',
    letterSpacing: '.0892857143em',
    verticalAlign: 'middle',
    color: '#000',
    userSelect: 'none',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    _active: {
      opacity: '.9',
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '#3f51b5',
        color: '#fff',
      },
      accent: {
        backgroundColor: '#ff4081',
        color: '#fff',
      },
      warn: {
        backgroundColor: '#f44336',
        color: '#fff',
      },
      disabled: {
        boxShadow: `
          0px 0px 0px 0px rgba(0, 0, 0, 0.2),
          0px 0px 0px 0px rgba(0, 0, 0, 0.14),
          0px 0px 0px 0px rgba(0, 0, 0, 0.12)
        `,
        backgroundColor: 'rgb(0, 0, 0, .12)',
        color: 'rgb(0, 0, 0, .38)',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
    size: {
      xs: {
        minInlineSize: '44px',
        blockSize: '22px',
        paddingInline: '8px',
        fontSize: '10px',
      },
      sm: {
        minInlineSize: '48px',
        blockSize: '24px',
        paddingInline: '12px',
        fontSize: '12px',
      },
      md: {
        minInlineSize: '64px',
        blockSize: '32px',
        fontSize: '14px',
      },
      lg: {
        minInlineSize: '96px',
        blockSize: '48px',
        fontSize: '18px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

type ButtonVariants = NonNullable<RecipeVariantProps<typeof buttonRecipe>>;

export type ButtonColor = Exclude<ButtonVariants['color'], 'disabled'>;

export type ButtonSize = ButtonVariants['size'];
