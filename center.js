import auto from '@autolib/auto';

let _ = auto({

    rootid: '#cover',

    root: _ => document.querySelector(_.rootid),

    screen_width: window.innerWidth,
    screen_height: window.innerHeight,

    el1: document.createElement('div'),
    el2: document.createElement('div'),

    width1: 250,
    height1: 150,

    body1: _ => document.body.append(_.e1),
    body2: _ => document.body.append(_.e2),

    bk1: _ => _.e1.style.background = 'black',
    bk2: _ => _.e2.style.background = 'blue',

    top1: _ => (_.screen_height - _.height1) / 3,
    left1: _ => (_.screen_width - _.width1) / 2,

    cp1: _ => _.el1.style.position = 'absolute',
    cw1: _ => _.el1.style.width = _.width1 + 'px',
    ch1: _ => _.el1.style.height = _.height1 + 'px',
    ct1: _ => _.el1.style.top = _.top1 + 'px',
    cc1: _ => _.el1.style.left = _.left1 + 'px',

    top2: _ => (_.screen_height - _.height2) / 3,
    left2: _ => (_.screen_width - _.width2) / 2,

    cp2: _ => _.el1.style.position = 'absolute',
    cw2: _ => _.el1.style.width = _.width2 + 'px',
    ch2: _ => _.el1.style.height = _.height2 + 'px',
    ct2: _ => _.el1.style.top = _.top2 + 'px',
    cc2: _ => _.el1.style.left = _.left2 + 'px',
});

// let step = 0;
// let loop = () =>
// {
//     setTimeout(() => {
//         Object.keys(_.steps[step]).forEach( key => {
//             _[key] = _.steps[step][key];
//         })
//         step += 1; if (step>_.steps.length-1) step = 0;
//         setTimeout(loop, 1000);
//     })
// }

// loop();

window.addEventListener("resize", function (event) {
    _.screen_width = window.innerWidth;
    _.screen_height = window.innerHeight;
})
