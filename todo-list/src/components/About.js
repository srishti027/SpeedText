import React, {useState} from 'react'

export default function About(props) {
//     let myStyle={
// color: 'white',
// backgroundColor: 'black'
//     }
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText]  = useState("Enable Dark Mode")
    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'black':'white',
    }
    // const toggleStyle = () =>{
    //     if(myStyle.color == 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"  style={myStyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong>  About SpeedText</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Welcome to SpeedText, your go-to app for all your text-related needs! We are passionate about simplifying your text editing experience, and we've designed SpeedText to be the ultimate companion for anyone who works with words. Whether you're a writer, student, or professional, SpeedText is here to make your life easier.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>  Our Mission</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      At SpeedText, our mission is clear: to provide you with a seamless and efficient way to work with text. We believe that words are powerful, and we want to empower you to harness that power effortlessly. We are committed to enhancing your productivity and creativity by offering a range of features designed to meet your text manipulation needs.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong> What Makes SpeedText Unique?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Word Count Tracker: We understand the importance of tracking your progress, which is why SpeedText keeps an accurate count of the words you input. Whether you're writing an essay, a novel, or a simple email, you'll always know how many words you've written.<br/>

Case Conversion: Need to convert text to uppercase or lowercase? SpeedText has you covered. Our app allows you to effortlessly switch between uppercase and lowercase, making formatting a breeze.
      </div>
    </div>
  </div>
</div>
{/* <button onClick={toggleStyle} className="my-3">{btnText}</button> */}
    </div>
  )
}
