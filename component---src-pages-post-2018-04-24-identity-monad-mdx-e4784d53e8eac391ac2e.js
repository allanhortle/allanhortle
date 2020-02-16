(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(e,a,n){"use strict";n.r(a);n(11),n(8),n(3),n(14),n(20);var t=n(0),s=n.n(t),c=n(44),m=n(103),o=n(1),p=n(47);n.d(a,"_frontmatter",function(){return d}),n.d(a,"default",function(){return j});var d={},i={_frontmatter:d},b=function(e){var a=e.children,n=e.pageContext.frontmatter.title;return s.a.createElement(m.a,e,s.a.createElement(o.c,{mb:3,position:"sticky",top:0},n),s.a.createElement(p.a,{maxWidth:"50rem"},a))};function j(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(c.mdx)(b,Object.assign({},i,n,{components:a,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Pure functions are great. They are clear, easy to test and easy to debug. But once you have more than a handful, composing them together becomes cumbersome and hard to read."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// confusing backwards maths"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"x"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"add10"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"divideByNine"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"multiplyByFour"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// bizzare double barrel functions"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"multiply"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ugly hoc exports in react"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"default")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"withState"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"withRouter"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"MyComponent",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.mdx)("h2",null,"Enter the Monad."),Object(c.mdx)("p",null,"Identity is the simplest monad and is a good place to learn the core concept of monads. That is: monads are function composers."),Object(c.mdx)("p",null,"A monad holds a value and then lets you pass it through functions. While each type of monad has different underlying logic, the identity has no logic and just composes functions together in order."),Object(c.mdx)("p",null,"The above examples can be rewritten using the identity monad."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Logically forwards maths"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"x"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"multiplyByFour",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"divideByFour",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"addTen",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// No double barrels"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"multiply"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"2"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Clearly ordered hock exports in react"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"default")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"MyComponent",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"withRouter",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"withState",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(c.mdx)("p",null,"While each example may have slightly more code, it is now clear how each function is executed in sequence. Similar to how a promise chain can minimise callback hell, monads minimise nested function madness."),Object(c.mdx)("h2",null,"How does it work."),Object(c.mdx)("p",null,"First let's make a class that can store a value."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"constructor"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"valueue ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(c.mdx)("p",null,"Now we can add a map method. This takes a function as it's argument, passes ",Object(c.mdx)("inlineCode",{parentName:"p"},"this.value")," through it, and places the result into a new monad."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"constructor"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"    ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token parameter"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"        ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"    ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(c.mdx)("p",null,"At the heart of the monad is a contract to always return a monad. With each call to ",Object(c.mdx)("inlineCode",{parentName:"p"},"map")," the monad updates the value via our function and places that inside another monad. So when given a monad we can continue to chain  ",Object(c.mdx)("inlineCode",{parentName:"p"},"map")," calls confident of their execution."),Object(c.mdx)("p",null,Object(c.mdx)("em",{parentName:"p"},"Side note: that's one of the reasons people who love monads also love types. If you know for certain that a function will also return a monad. You know for certain you can always call map.")),Object(c.mdx)("h2",null,"What about flatMap?"),Object(c.mdx)("p",null,"You may have noticed a possible problem with our Identity. If ",Object(c.mdx)("inlineCode",{parentName:"p"},"fn")," returned an Identity we'd end up with a value in and identity in an identity. Sometimes that might be exactly what you want, but if that's not the case  monads have a ",Object(c.mdx)("inlineCode",{parentName:"p"},"flatMap")," function. flatMap as the name suggests is like map but it flattens two monads into one. Or put another way it ignores its own monad and accepts the monad that ",Object(c.mdx)("inlineCode",{parentName:"p"},"fn")," returns."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"constructor"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"    ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"flatMap"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token parameter"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"        ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"    ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(c.mdx)("p",null,"Now if we restructure our pure functions to each return an Identity it doesn't matter what order we call them in."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"addTen")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"value ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"+")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"10"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"divideByNine")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"value ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"9"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"addTen"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"80"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"flatMap"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"divideByNine",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Identity(10)"),"\n\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"divideByNine"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"18"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"flatMap"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"addTen",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Identity(12)")))),Object(c.mdx)("h2",null,"Who needs map?"),Object(c.mdx)("p",null,"What's interesting about flatMap is that in combination with the unit function we can recreate map. Even though we started with map in monad land flatMap and unit are the core functions and map is just useful sugar on top."),Object(c.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Identity")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"constructor"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"value"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"map"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"gatsby-highlight-code-line"}),"        ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"flatMap"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token parameter"}),"val"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),"=>")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"new")," ",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Identity"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"val",Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")),"    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"flatMap"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"fn"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"value",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(c.mdx)("p",null,"This may seem unnecessary on a simple monad like Identity. But as the logic inside flatMap gets more complicated it's nice to only have it in one place."),Object(c.mdx)("h2",null,"Ok. What's next?"),Object(c.mdx)("p",null,"The identity monad is great for composing functions in sequence, but where monads really shine is when there is logic in flatMap. Based on extra information stored on the monad you can choose whether or not to call the function given to flatMap."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Maybe checks for null values before calling"),Object(c.mdx)("li",{parentName:"ul"},"Either does a boolean check.")))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-post-2018-04-24-identity-monad-mdx-e4784d53e8eac391ac2e.js.map