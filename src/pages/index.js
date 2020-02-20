import React, { Component } from "react"
import ContainerCircle from "../components/containerCircle"
import ContainerRounded from "../components/containerRounded"
import ContainerRoundedAssym from "../components/containerRoundedAssym"
import ContainerRectangle from "../components/containerRectangle"
import Layout from "../components/layout"
import Logo from "../components/logo"
import PlayButton from "../components/PlayButton"
import SEO from "../components/seo"
import LeftParallelogram from "../components/leftParallelogram"
import RightParallelogram from "../components/rightParallelogram"

class IndexPage extends Component {
  
  state = {
    currentPlayButtonId: "Nothing to see here!",
    isPlayOnDeck: false,
    isTimerOn: true
	};

  handlePlayButtonClick = event => {
    event.preventDefault();
    if (this.state.isTimerOn===false){
      alert("try again");
    }
    else{
      this.setState({ isPlayOnDeck: true})
      this.setState({ currentPlayButtonId: event.target.attributes.getNamedItem("buttonId").value});
    }
    
	}

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section style={{display: "flex", flexDirection: `column`, overflowX: `hidden`, padding: `.5em`}}>
          <h2 style={{ padding: `.5em 0 1em 0`, textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>Intro</h2>
          <LeftParallelogram bgcolor="#1AE063" fontColor="black">
            <h3 style={{textAlign: `center`}}>Overview</h3>
            <div style={{textAlign: `right`}}>
              <p>Hi! This is the script for the public presentation of my master's thesis in <a href="https://cmsw.mit.edu/">Comparative Media Studies at MIT</a>.</p>
              <p>I am <a href="https://www.samuelanimates.com/">Samuel R. Mendez</a>. I am an artist and a public health researcher. In my thesis, I look at how the humanities can promote community engagement that can advance health equity.</p>
              <p>In my thesis, I play with different kinds of media to give different kinds of insights into health topics. So, I want to try that here as well. Now let's move on to the descrciption of what's going on here.</p>
            </div>
          </LeftParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <RightParallelogram>
            <h3 style={{textAlign: `center`}}>Description</h3>
            <div style={{textAlign: `left`}}>
              <p>I will try perform 12 plays. They might not resemble any play you've seen before, but they are plays. Like I said before, I'm an artist and a scholar. You can trust me. I wouldn't lie to you.</p>
              <p>That means I will not lie in any of these plays either. I will not pretend to be anywhere but here at MIT. I will not pretend to be anyone but myself. And I will not pretend to be any-when other than right now. It'll make sense once you experence it, trust me.</p>
              <p>Now let's move on to the instructions. Because at key points I will need you all to participate.</p>
            </div>
          </RightParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <LeftParallelogram bgcolor="#3b0025" fontColor="white">
            <h3 style={{textAlign: `center`}}>Instructions</h3>
            <div style={{textAlign: `right`}}>
              <p>I only have 24 minutes to get through 12 plays. That means I have to <span role="img" aria-label="handclap">👏</span> keep <span role="img" aria-label="handclap">👏</span> things <span role="img" aria-label="handclap">👏</span> on <span role="img" aria-label="handclap">👏</span> track.</p>
              <p>And I need your help. Because I don't know the order of the 12 plays. I don't know the order because you will decide it for me. When I finish one play I will ask you all, "What play would you like to see next?" And you will respond with the number of the play you want to see. Let's try it now. Just pick a random number.</p>
              <p>What play would you like to see next?</p>
              <p>Now let's get started.</p>
            </div>
          </LeftParallelogram>
          <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
          </div>
          <RightParallelogram>
            <h3 style={{textAlign: `center`}}>Getting Started</h3>
            <div style={{textAlign: `left`}}>
              <p>Now I did lie a little bit. But it was just a lie by omission, so it's technically fine. I don't know the order of the plays, but I did already decide which play is first. Play #1 will be first. Big surprise.</p>
              <p>But first, I'll give you a chance to look at the numbers and titles of all the plays. Then I'll start the timer. Then I'll perform play #1. And then I'll ask you, "What play would you like to see next?"</p>
            </div>
          </RightParallelogram>
        </section>
        <div style={{display: "flex", justifyContent: `center`}}>
            <Logo/>
        </div>
        <main style={{ padding: `2em` }}>
          { this.state.isPlayOnDeck && <section>
              <h2 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Stage.</h2>
                hayy this is play {this.state.currentPlayButtonId}
            </section>
          }
          <section>
            <h2 style={{textAlign: `center`, textShadow:`-1.5px -1.5px 0 #acee66, 1.5px -1.5px 0 #acee66, -1.5px 1.5px 0 #acee66, 1.5px 1.5px 0 #acee66`}}>The Plays.</h2>
            <div style={{display:`flex`, flexWrap: `wrap`,  justifyContent: `center`}}>
              <ContainerRounded bgcolor="#0000AE" color="white">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#1:</span><br/>The Wave</p>
                <PlayButton buttonId="play01" onClickFunction={this.handlePlayButtonClick} text="start Play 1"/>
              </ContainerRounded>
              <ContainerRectangle bgcolor="#FFCCF7" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#2:</span><br/>Transmission + Ritual</p>
                <PlayButton buttonId="play02" onClickFunction={this.handlePlayButtonClick} text="start Play 2"/>
              </ContainerRectangle>
              <ContainerCircle bgcolor="white" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#3:</span><br/>Q+A</p>
                <PlayButton buttonId="play03" onClickFunction={this.handlePlayButtonClick} text="start Play 3"/>
              </ContainerCircle>
              <ContainerRoundedAssym bgcolor="#F3FFCC" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#4:</span><br/>Problematic Faves</p>
                <PlayButton buttonId="play04" onClickFunction={this.handlePlayButtonClick} text="start Play 4"/>
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="#753002" color="white">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#5:</span><br/>A People's Guide to Precision Medicine</p>
                <PlayButton buttonId="play05" onClickFunction={this.handlePlayButtonClick} text="start Play 5"/>
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="white" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#6:</span><br/>HER</p>
                <PlayButton buttonId="play06" onClickFunction={this.handlePlayButtonClick} text="start Play 6"/>
              </ContainerRoundedAssym>
              <ContainerRoundedAssym bgcolor="white" color="black">
                <p><span style={{fontWeight: `700`, textSize: `2em`}}>#7:</span><br/>Nicole</p>
                <PlayButton buttonId="play07" onClickFunction={this.handlePlayButtonClick} text="start Play 7"/>
              </ContainerRoundedAssym>
            </div>
          </section>
          
        </main>
    </Layout>
  )};
}

export default IndexPage
