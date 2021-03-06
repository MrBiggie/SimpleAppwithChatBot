import React from 'react'
import stylesheet from './style.scss'
import MyChat from "./chat";


const MY_TOKEN = "4ECVKBPXXPYHIY7UAZZCRP64YE7RVQYJ";
const {Wit, log} = require('node-wit');

const client = new Wit({accessToken: MY_TOKEN});

const VALUE = 0;
//const {interactive} = require('node-wit');
//interactive(client)
// var answer = "Welcome! Try type in your questions in the text box above!";
var response = "";
class SampleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answer: "Welcome! Try type in your questions in the text box above!"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        var query = this.state.value


        client.message(query, {})
            .then((data) => {

                var flag = data.entities;
                if(JSON.stringify(flag) == "{}"){
                    this.setState({answer: "Sorry, we don't have an answer to that question"});
                }else {
                    response = JSON.stringify(flag.intent[VALUE].value);
                    if (response == "") {
                        this.setState({answer: "Sorry, we don't have an answer to that question"});
                    } else {
                        this.setState({answer: response});
                    }
                }
            })
            .catch(console.error);

        event.preventDefault();
    }


    handleResponse(event) {
        var response = client.message(this.state.value)
        alert('A name was submitted: ' + response);
        return (<input type="text" value={response}></input>)
    }

    render() {
        // const {inputValue, messages, timestamp} = this.state;
        // const userInfo = {
        //     avatar: "http://img.binlive.cn/6.png",
        //     userId: "59e454ea53107d66ceb0a598",
        //     name: 'customer'
        // };
        
        return (
            <div className="SampleProduct">
                <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                <div className="SampleProduct__title">
                    <div className="SampleProduct__title--h1">
                        <h2>TRY OUR</h2>
                        <h3><p className="SampleProduct__part1">SERVICE</p><p className="SampleProduct__part2">NOW</p>
                        </h3>
                    </div>
                    <div className="SampleProduct__title--dash">
                    </div>
                    <div className="SampleProduct__title--button">
                        <div>
                            <p>
                                Enter your query and submit. You Will get the suggestion.
                            </p>
                        </div>
                        {/* <div className="action" value>TRY</div> */}
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Query:
                        <input className="SampleProduct__title" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>

                    <button className="action" type="submit"> Submit</button>
                </form>

                <label className="SampleProduct__part1">
                    {this.state.answer}
                </label>

            </div>
        )
    }
}


export default SampleProduct
