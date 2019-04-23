// import Chat from 'chat-react';
// import {Component} from "react/lib/ReactBaseClasses";
//
// const VALUE = 0;
// const MY_TOKEN = "NDHT5JOO2IKK4TAB3MFDEVRIBCA7M3RG";
// const {Wit, log} = require('node-wit');
//
// const client = new Wit({accessToken: MY_TOKEN});
//
// export default class MyChat extends Component {
//     state = {
//         inputValue: '',
//         messages: [],
//         timestamp: new Date().getTime()
//     }
//     setInputfoucs = () => {
//         this.chat.refs.input.inputFocus();  //set input foucus
//     }
//     setScrollTop = () => {
//         this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
//     }
//     sendMessage = (v) => {
//         const {value} = v;
//         if (!value) return;
//         const {messages = []} = this.state;
//         messages.push(v);
//
//         messages.push(client.message(v));
//         // var response;
//         // client.message(inputValue, {})
//         //     .then((data) => {
//         //         response = JSON.stringify(data.entities.Intent[VALUE].value);
//         //         messages.push(response);
//         //     })
//         //     .catch(console.error);
//
//         this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
//     }
//     render() {
//         const {inputValue, messages, timestamp} = this.state;
//         const userInfo = {
//             avatar: "http://img.binlive.cn/6.png",
//             userId: "59e454ea53107d66ceb0a598",
//             name: 'ricky'
//         };
//         return (
//             <Chat
//                 ref={el => this.chat = el}
//                 className="my-chat-box"
//                 dataSource={messages}
//                 userInfo={userInfo}
//                 value={inputValue}
//                 sendMessage={this.sendMessage}
//                 timestamp={timestamp}
//                 placeholder="input here"
//                 messageListStyle={{width: '100%', height: window.outerHeight}}
//             />
//         );
//     }
// }
