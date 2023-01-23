import auto from '@autolib/auto';

let Book = id =>
    <div>
        <p>{id}</p>
        <div id={id}></div>
    </div>;

let _ = auto({

    name: 'karl',
    rootid: '#cover',
    target: '#app1',

    root: _ => document.querySelector(_.rootid),

    ids: ['app1','app2','app3'],

    // divs: _ => _.ids.map(id => document.createElement('div')),

    // elms: _ => _.ids.map(id => <Book id={id} />),

    elms: _ => _.ids.map(id => auto({

        dv: document.createElement('div'),
        in: document.createElement('div'),
        pp: document.createElement('p'),
        tx: document.createTextNode(id),

        pa: _ => _.pp.appendChild(_.tx),
        da: _ => _.dv.append(_.pp),
        ia: _ => _.in.setAttribute('id',id),
        db: _ => _.dv.append(_.in),
    })),

    adds: _ => _.elms.forEach(elm => _.root.append(elm.dv)),

    steps: [
        { target: '#app1', name: 'karl' },
        { target: '#app2', name: 'james' },
        { target: '#app3', name: 'james' }],

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
        Object.keys(_.steps[step]).forEach( key => {
            _[key] = _.steps[step][key];
        })
        step += 1; if (step>_.steps.length-1) step = 0;
        setTimeout(loop, 1000);
    })
}

loop();

window.addEventListener("resize", function(event) {
    _.screen_width = window.innerWidth;
    _.screen_height = window.innerHeight;
})
