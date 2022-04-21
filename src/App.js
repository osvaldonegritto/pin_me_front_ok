import React,{useState, useEffect} from "react";
import axios from 'axios';
//import logo from './logo.svg';
import './App.scss';
import Section1 from './components/Section1/section1';
import Section2 from './components/Section2/section2';
import Section3 from './components/Section3/section3';
import Section4 from './components/Section4/section4';
import Section5 from './components/Section5/section5';
import Section6 from './components/Section6/section6';




function App() {

  const [contactData, setContactData] = useState({name:"", email:"", phone:"", message:""})
  const disable = !contactData.name.length || !contactData.email.length || !contactData.phone.length || !contactData.message.length

  function handleChangeGeneral(event){
    /* const newData = {...userData}
       newData.name = event.target.value
       setContactData(newData) */
      setContactData({...contactData, [event.target.name]:event.target.value})
  }

  function handleSend(event){
      event.preventDefault() //para evitar el submit
      axios.post("http://127.0.0.1:8000/api/visitors", contactData)
      .then(response=>{
          console.log(response)
          setContactData({name:"", email:"", phone:"", message:""}) //volvemos a vaciar el objeto
      }).catch(err=>{
          console.log(err)
      })
  }


  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5 disable={disable} handleChangeGeneral={handleChangeGeneral} contactData={contactData} handleSend={handleSend}/>
      <Section6/>
    </div>
  );
}

export default App;
