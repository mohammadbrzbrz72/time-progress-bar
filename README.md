# TimeProgressBar

Its a react package to create progressbar component for your time interval.

<br />

## [#Online Demo](https://codepen.io/mohammadbrzbrz72/pen/RwgmPmx)

<br />
<br />
<a href="https://imgbb.com/" target="_blank"><img style='width:300px' src="https://i.ibb.co/0VSjfrF/demo-time-progress-bar.png" alt="demo-time-progress-bar" border="0px" /></a>
<br />
<br />

### Package size:

&nbsp;&nbsp;&nbsp;&nbsp;package size:&nbsp;&nbsp;&nbsp;&nbsp; `3.9KB `<br />
&nbsp;&nbsp;&nbsp;&nbsp;gzipped size:&nbsp;&nbsp;&nbsp;&nbsp; `1.5KB`

<br />

## Links:

&nbsp;&nbsp;&nbsp;&nbsp;[Npm link](https://www.npmjs.com/package/time-progress-bar) <br />
&nbsp;&nbsp;&nbsp;&nbsp;[Github link](https://github.com/mohammadbrzbrz72/time-progress-bar)

<br />

## Installation:

npm:

&nbsp;&nbsp;&nbsp;&nbsp;`npm install --save time-progress-bar`

yarn:

&nbsp;&nbsp;&nbsp;&nbsp;`yarn add time-progress-bar`

<br />

### Usage exmaple:

<br />

```jsx
<>
  <TimeProgressBar data={[{ start: "03:25:53", end: "18:06:00" }]} />

  <TimeProgressBar
    hourBar="primary"
    data={[
      { start: "03:25:53", end: "8:06:00" },
      { start: "09:25:53", end: "13:06:00", color: "red" },
      { start: "14:25:53", end: "19:06:00" },
    ]}
  />

  <TimeProgressBar
    hourBar="tertiary"
    data={[{ start: "03:25:53", end: "13:06:00", color: "gold" }]}
  />

  <TimeProgressBar
    className="some-classes"
    style={{ height: 60, paddingTop: 20 }}
    backgroundColor="#dff9fb"
    props={{
      style: { height: 11 },
      onClick: () => console.log("root"),
      // ...can set all root element props
    }}
    hourBar={
      <>
        <span style={{ fontSize: 13 }}>6 am</span>
        <span style={{ fontSize: 13 }}>6 pm</span>
      </>
    }
    data={[
      {
        start: "03:25:53",
        end: "13:06:00",
        color: "#22a6b3",
        className: "some-class",
        /*
        .some-class:hover .timebar-box div {
          display: block !important; 
        }
        */
        style: { cursor: "pointer" },
        children: (
          <div
            style={{
              position: "absolute",
              top: -45,
              left: 7.5,
              display: "none",
              padding: 6,
              backgroundColor: "#dff9fb",
            }}
          >
            Working time
          </div>
        ),
        props: {
          onClick: function (e) {
            e.stopPropagation();
            console.log("timebar");
          },
          // ...can set all element props
        },
      },
    ]}
  />
</>
```

<br />
<br />

## DOCs:

#

### `TimeProgressBar Props:`

**className** => string ( default: "" ) <br />
set className for time-progress-bar container
<br />
<br />
**style** => undefined(default) or object
set style for time-progress-bar container
<br />
<br />
**backgroundColor** => set backgroundColor for root (default: "#F5F6F8")
<br />
<br />
**props** => ...can set all root element props
<br />
<br />
**hourBar**

- primary
- secondary(default)
- tertiary
- custom components(`<span> 12 </span>`)
  <br />
  <br />

**data** => create timebar components with these props:
<br />
<br />

### `data Props:`

**start** => time start <br /><br />
**end** => time end <br /><br />
**key** => set your custom key for unique keynames <br /><br />
**color** => timebar color <br /><br />
**children** => set children in timebar to set extra data with hover or ... <br /><br />
**className** => set string className <br /><br />
**props** => can send any props that timebar(div) can have, and set with object {}
,<br />Example: <br />
props: {<br />
&nbsp;&nbsp;&nbsp;onClick: () => {} ,<br />
&nbsp;&nbsp;&nbsp;style: {} ,<br />
&nbsp;&nbsp;&nbsp;onMouseDown: () => {} ,<br />
&nbsp;&nbsp;&nbsp;...<br />
}
<br />
