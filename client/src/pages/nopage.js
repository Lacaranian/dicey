import React from 'react'
import Alert from 'react-bootstrap/Alert'

function NoPage(){

    return(<Alert variant="secondary" style={{margin: "10%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
<Alert.Heading style = {{fontSize: "50px", textAlign: "center"}}>404 Page not found</Alert.Heading>
<p style={{textAlign: "center"}}>
    "It's a dangerous business, going off the page. You step off the page, and if you don't keep your senses, there's no knowing where you might be swept off to."
</p>
<img src="https://img.icons8.com/windows/32/000000/one-ring.png" />
<hr/>
<a className="mb-0" style={{textAlign: "center"}} href="/">
    Best stay home
</a>
</Alert>);
}
export default NoPage;