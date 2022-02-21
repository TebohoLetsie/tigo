import React,{useState} from "react"
import {Grow,Grid,Container} from "@material-ui/core"

import School from "../School/School/School"
import { useDispatch} from 'react-redux';

import Header from "../Header/Header"




const Calculator = () => {
    const [subject, setSubject] = useState({ HL:"", FAL:"",Math:"",subject3:"",subject4:"",subject5:"",subject6:"",subject7:"" })
    const [mark,setMark] = useState({HL:"",FAL:"",Math:"",subject3:"",subject4:"",subject5:"",subject6:""})
    const [results,setResults] = useState({NwuNo:"",NwuAps:"",UpNo:"",UpAps:"",WitsNo:"",WitsAps:"",ULNo:"",ULAps:"",UjNo:"",UjAps:"",Course:"",University:""});
  
    const dispatch = useDispatch();

  
   //{"NwuNo":129,"NwuAps":34,"UpNo":129,"UpAps":34,"WitsNo":22,"WitsAps":37,"ULNo":49,"ULAps":34,"UjNo":96,"UjAps":34,"Course":485,"University":5} 
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      
        // dispatch(postCalculator(mark));
        // calculate({mark,subject}).then((data)=>{
        //   console.log(data);
        // },
        // (error)=>{
        //   console.log(error);
        // });
        //  const data = "user" 
        // user(data).then((data)=>{
        //   console.log(data)
        // });

        const requestOptions = {
          method:"POST",
          headers:{'content-type':'application/json'},
          body: JSON.stringify({mark,subject})
        }
        fetch('/calculate',requestOptions).then(
          response => response.json()).then(data=>setResults(data))

        
    
      console.log(results.NwuNo)
    };
   
  return(
    <Container maxWidth="lg">
    <Header title="calculator" />

    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item >
         
         <div className="calculator-page">
         <div className="calculator">
        
         <form className="form-group" >
          <h2>Calculate</h2>
          <div className="pair">
            <select className="form-items" name="HL"   onClick={(e)=>setSubject({...subject,HL: e.target.value})} >
             <option value="">HL</option>
             <option value="Afrikaans_FAL">Afrikaans </option>
             <option value="English">English </option>
             <option value="Isindebele_FAL">IsiNdebele </option>
             <option value="IsiXhosa_FAL">IsiXhosa </option>
             <option value="option1">IsiZulu </option>
             <option value="option1">Setswana </option>
             <option value="option1">Tshivenda </option>
             <option value="option1">Xitsonga </option>
             <option value="option1">Northern Sotho </option>
             <option value="option1">Southern Sotho </option>
             </select>
             <input className="percentage" maxLength="3" min="0" max="100"  placeholder="%" value = {mark.HL} onChange={(e)=>setMark({...mark, HL: e.target.value})}/>
             </div>
             
             <div className="pair">
             <select className="form-items" name="FAL" onClick={(e)=>setSubject({...subject,FAL: e.target.value})}>
                 <option value="">FAL</option>
                 <option value="Afrikaans_">Afrikaans</option>
                 <option value="English">English</option>
                 <option value="Isindebele_">IsiNdebele</option>
                 <option value="IsiXhosa_">IsiXhosa</option>
                 <option value="option1">IsiZulu </option>
                 <option value="option1">Setswana </option>
                 <option value="option1">Tshivenda </option>
                 <option value="option1">Xitsonga </option>
                 <option value="option1">Northern Sotho </option>
                 <option value="option1">Southern Sotho </option>
             </select>
             <input className="percentage"  maxLength="3" min="0" max="100" placeholder="%" value = {mark.FAL} onChange={(e)=>setMark({...mark, FAL: e.target.value})}/>
             </div>
             <div className="pair">
             <select className="form-items" name="Maths" onClick={(e)=>setSubject({...subject,Math: e.target.value})}>
                <option value="">Subject 1</option>
                <option value="maths" name="maths">Mathematics</option>
                 <option value="mathsL" name ="math_Lit">Mathematical Literacy</option>
                <option value="mathsTech" name ="math_Tech">Technical Mathematics</option>
            </select>
            <input className="percentage" maxLength="3" placeholder="%" value = {mark.Math} onChange={(e)=>setMark({...mark, Math: e.target.value})}/>
            </div>
            <div className="pair">
            <select className="form-items" onClick={(e)=>setSubject({...subject,subject3: e.target.value})}>
            <option value="">Subject 2</option>
    <option value="CAT">CAT</option>
    <option value="ABRSM_Practical_Music_Grade_7">ABRSM Practical Music Grade 7</option>
    <option value="Accounting">Accounting</option>
    <option value="Afrikaans_SAL">Afrikaans SAL</option>
    <option value="Agricultural_Management_Practices">Agricultural Management Practices</option>
    <option value="Agricultural_Sciences">Agricultural Sciences</option>
    <option value="Agricultural_Technology">Agricultural Technology</option>
    <option value="Arabic_SAL">Arabic SAL</option>
    <option value="Business_Studies">Business Studies</option>
    <option value="Chiness_A-Level">Chiness A-Level</option>
    <option value="option1">Civil Technology</option>
    <option value="Consumer_Studies">Consumer Studies</option>
    <option value="option1">Dance Studies</option>
    <option value="option1">Design</option>
    <option value="option1">Dramtic Arts</option>
    <option value="economics">Economics</option>
    <option value="egd">EGD</option>
     <option value="English_SAL">English SAL</option>
     <option value="option1">Equine studies</option>
     <option value="option1">French SAL</option>
     <option value="option1">Geography</option>
     <option value="option1">German HL</option>
     <option value="option1">German SAL</option>
     <option value="option1">Gujarati SAL</option>
      <option value="option1">Hebrew SAL</option>
      <option value="">Hindi FAL</option>
      <option value="">Hindi SAL</option>
      <option value="">History</option>
      <option value="">Hospitality Studies</option>
      <option value="">Information Technology</option>
      <option value="">IsiXhosa SAL</option>
      <option value="">IsiNdebele SAL</option>
      <option value="">IsiZulu SAL</option>
      <option value="">Italia2n SAL</option>
      <option value="">Latin SAL</option>
      <option value="">Life Sciences</option>
      <option value="">Maritime Economics</option>
      <option value="">Machanical Technology</option>
      <option value="">Morden Greek SAL</option>
      <option value="">Music</option>
      <option value="">Nautical Science</option>
      <option value="">Physical Science</option>
      <option value="">Portuguese SAL</option>
      <option value="">Religion Studies</option>
      <option value="">Sepedi SAL</option>
      <option value="">Sesotho SAL</option>
      <option value="">Setswana SAL</option>
      <option value="">Spanish SAL</option>
      <option value="">Sport and Exercise Science</option>
      <option value="">Tamil FAL</option>
      <option value="">Tamil SAL</option>
      <option value="">Urdu FAL</option>
      <option value="">Urdu SAL</option>
      <option value="">Visual Arts</option>
      <option value="">Xitsonga SAL</option>
            </select>
            <input className="percentage" maxLength="3" placeholder="%" value = {mark.subject3} onChange={(e)=>setMark({...mark, subject3: e.target.value})}/>
            </div>
            <div className="pair">
            <select className="form-items">
            <option value="">Subject 3</option>
    <option value="CAT">CAT</option>
    <option value="ABRSM_Practical_Music_Grade_7">ABRSM Practical Music Grade 7</option>
    <option value="Accounting">Accounting</option>
    <option value="Afrikaans_SAL">Afrikaans SAL</option>
    <option value="Agricultural_Management_Practices">Agricultural Management Practices</option>
    <option value="Agricultural_Sciences">Agricultural Sciences</option>
    <option value="Agricultural_Technology">Agricultural Technology</option>
    <option value="Arabic_SAL">Arabic SAL</option>
    <option value="Business_Studies">Business Studies</option>
    <option value="Chiness_A-Level">Chiness A-Level</option>
    <option value="option1">Civil Technology</option>
    <option value="Consumer_Studies">Consumer Studies</option>
    <option value="option1">Dance Studies</option>
    <option value="option1">Design</option>
    <option value="option1">Dramtic Arts</option>
    <option value="economics">Economics</option>
    <option value="egd">EGD</option>
     <option value="English_SAL">English SAL</option>
     <option value="option1">Equine studies</option>
     <option value="option1">French SAL</option>
     <option value="option1">Geography</option>
     <option value="option1">German HL</option>
     <option value="option1">German SAL</option>
     <option value="option1">Gujarati SAL</option>
      <option value="option1">Hebrew SAL</option>
      <option value="">Hindi FAL</option>
      <option value="">Hindi SAL</option>
      <option value="">History</option>
      <option value="">Hospitality Studies</option>
      <option value="">Information Technology</option>
      <option value="">IsiXhosa SAL</option>
      <option value="">IsiNdebele SAL</option>
      <option value="">IsiZulu SAL</option>
      <option value="">Italian SAL</option>
      <option value="">Latin SAL</option>
      <option value="">Life Sciences</option>
      <option value="">Maritime Economics</option>
      <option value="">Machanical Technology</option>
      <option value="">Morden Greek SAL</option>
      <option value="">Music</option>
      <option value="">Nautical Science</option>
      <option value="">Physical Science</option>
      <option value="">Portuguese SAL</option>
      <option value="">Religion Studies</option>
      <option value="">Sepedi SAL</option>
      <option value="">Sesotho SAL</option>
      <option value="">Setswana SAL</option>
      <option value="">Spanish SAL</option>
      <option value="">Sport and Exercise Science</option>
      <option value="">Tamil FAL</option>
      <option value="">Tamil SAL</option>
      <option value="">Urdu FAL</option>
      <option value="">Urdu SAL</option>
      <option value="">Visual Arts</option>
      <option value="">Xitsonga SAL</option>
            </select>
            <input className="percentage" maxLength="3" placeholder="%" value = {mark.subject4} onChange={(e)=>setMark({...mark, subject4: e.target.value})}/>
            </div>
          <div className="pair">
            <select className="form-items" onClick={(e)=>setSubject({...subject,subject4: e.target.value})}>
            <option value="">Subject 4</option>
    <option value="CAT">CAT</option>
    <option value="ABRSM_Practical_Music_Grade_7">ABRSM Practical Music Grade 7</option>
    <option value="Accounting">Accounting</option>
    <option value="Afrikaans_SAL">Afrikaans SAL</option>
    <option value="Agricultural_Management_Practices">Agricultural Management Practices</option>
    <option value="Agricultural_Sciences">Agricultural Sciences</option>
    <option value="Agricultural_Technology">Agricultural Technology</option>
    <option value="Arabic_SAL">Arabic SAL</option>
    <option value="Business_Studies">Business Studies</option>
    <option value="Chiness_A-Level">Chiness A-Level</option>
    <option value="option1">Civil Technology</option>
    <option value="Consumer_Studies">Consumer Studies</option>
    <option value="option1">Dance Studies</option>
    <option value="option1">Design</option>
    <option value="option1">Dramtic Arts</option>
    <option value="economics">Economics</option>
    <option value="egd">EGD</option>
     <option value="English_SAL">English SAL</option>
     <option value="option1">Equine studies</option>
     <option value="option1">French SAL</option>
     <option value="option1">Geography</option>
     <option value="option1">German HL</option>
     <option value="option1">German SAL</option>
     <option value="option1">Gujarati SAL</option>
      <option value="option1">Hebrew SAL</option>
      <option value="">Hindi FAL</option>
      <option value="">Hindi SAL</option>
      <option value="">History</option>
      <option value="">Hospitality Studies</option>
      <option value="">Information Technology</option>
      <option value="">IsiXhosa SAL</option>
      <option value="">IsiNdebele SAL</option>
      <option value="">IsiZulu SAL</option>
      <option value="">Italian SAL</option>
      <option value="">Latin SAL</option>
      <option value="">Life Sciences</option>
      <option value="">Maritime Economics</option>
      <option value="">Machanical Technology</option>
      <option value="">Morden Greek SAL</option>
      <option value="">Music</option>
      <option value="">Nautical Science</option>
      <option value="">Physical Science</option>
      <option value="">Portuguese SAL</option>
      <option value="">Religion Studies</option>
      <option value="">Sepedi SAL</option>
      <option value="">Sesotho SAL</option>
      <option value="">Setswana SAL</option>
      <option value="">Spanish SAL</option>
      <option value="">Sport and Exercise Science</option>
      <option value="">Tamil FAL</option>
      <option value="">Tamil SAL</option>
      <option value="">Urdu FAL</option>
      <option value="">Urdu SAL</option>
      <option value="">Visual Arts</option>
      <option value="">Xitsonga SAL</option>
            </select>
            <input className="percentage" maxLength="3" placeholder="%" value = {mark.subjet5} onChange={(e)=>setMark({...mark, subject5: e.target.value})}/>
            </div>
            <select className="form-items" onClick={(e)=>setSubject({...subject,subject5: e.target.value})}>
            <option value="">Subject 5</option>
    <option value="Life Orientation">Life Orientation</option>
   
            </select>
         <input className="percentage" maxLength="3" placeholder="%" value = {mark.subject6} onChange={(e)=>setMark({...mark, subject6: e.target.value})}/>
           <br></br>
      <button className="btn-calculator"  onClick={handleSubmit}>Calculate</button>
          </form>

         </div> 
      </div>     
         
     

  
          </Grid>
          <Grid item xs={12} sm={4}>
           { (results.NwuNo ==="") ? null : 
           <School  title="North-West University" Aps={results.NwuAps} number={results.NwuNo} src="img/nwu.png"/>
            }
          </Grid>
          <Grid item xs={12} sm={4}>
           { (results.UpNo ==="") ? null: 
           <School  title="University of Pretoria" Aps={results.NwuAps} number={results.NwuNo} src="img/up.png"/> 
            }
            <Grid item >
           { (results.UjNo ==="") ? null : 
           <School  title="University of Johannesburg" Aps={results.NwuAps} number={results.NwuNo} src="img/uj.jpg"/>
            }
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
   
      
      
  )
}

export default Calculator;