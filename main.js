import auto from '@autolib/auto';

let _ = auto({

    name: 'karl',
    rootid: '#cover',
    target: '#app1',

    root: _ => document.querySelector(_.rootid),

    ids: ['app1','app2','app3'],

    elms: _ => _.ids.map(id => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let tx = document.createTextNode(id);
        p.appendChild(tx);
        div.append(p);
        let inner = document.createElement('div');
        inner.id = id;
        div.append(inner);

        return div;
    }),

    adds: _ => _.elms.forEach(elm => _.root.append(elm)),

    steps: [
        { el: '#app1', name: 'karl' },
        { el: '#app2', name: 'james' },
        { el: '#app3', name: 'james' }],

    el: (_) => document.querySelector(_.target),
    e0: (_) => document.createElement("h1"),
    t1: (_) => document.createTextNode(''),

    x0: (_) => _.e0.appendChild(_.t1),
    x1: (_) => _.el.append(_.e0),
    x2: (_) => _.t1.data = 'Hello ' + _.name,

    cl: (_) => document.querySelector(_.rootid),

    screen_width: window.innerWidth,
    screen_height: window.innerHeight,

    width: 250,
    height: 150,

    top: _ => (_.screen_height-_.height)/3,
    left: _ => (_.screen_width-_.width)/2,

    cp: _ => _.cl.style.position = 'absolute',
    cw: _ => _.cl.style.width = _.width + 'px',
    ch: _ => _.cl.style.height = _.height + 'px',
    ct: _ => _.cl.style.top = _.top + 'px',
    cc: _ => _.cl.style.left = _.left + 'px',

});

let step = 0;
let loop = () =>
{
    setTimeout(() => {
        _.name = _.steps[step].name;
        _.target = _.steps[step].el;
        step += 1; if (step>_.steps.length-1) step = 0;
        setTimeout(loop, 1000);
    })
}

loop();

window.addEventListener("resize", function(event) {
    _.screen_width = window.innerWidth;
    _.screen_height = window.innerHeight;
})
