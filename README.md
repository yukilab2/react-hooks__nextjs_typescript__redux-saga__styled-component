# TODO

- maybe: _document.tsx, _app.tsxは必要になるまで作らない。 styled-componentでは必要なかった。
    - 参考： [how nextjs works](https://jsramblings.com/server-side-rendered-styled-components-with-nextjs/)

# Note

- `yarn dev`を使っている間、 
`react-dom.development.js:88 Warning: Prop `\className\` did not match. Server` 
という警告がブラウザのコンソールに出る場合があります。
表示が異常になることはないと思います。 
'yarn build && yarn start' したとき(PRODUCTION BUILD)では、
この警告は表示されません。  (styled-componentをサーバサイドでも使う様正しく実装すれば消えるかもしれないが PRODUCTIONでは不要)


# thanks
- [setting up next.js/type-script/styled-component project](https://future-architect.github.io/typescript-guide/reactenv.html)
- [Using Next.js ▲ with styled-components 💅 easy way](https://frontendmantra.com/using-next-js-with-styled-components-easy-way/)
- [styled-components Hooksでの使い方](https://material-ui.com/styles/basics/)

