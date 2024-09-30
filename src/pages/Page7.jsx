
import "./page7style.css";
function Page7(){


return(
<div style={{display:"flex"}}>


<div style={{display:"flex"}}>
  
  <div style={{marginTop:"200px"}}>
    <img src="/page6.jpg" class="position-right"  width="650" height="750" />

   
<h1 style={{color:"#ffffff"}}>555-0198    123 Maple Street, Spriengfield, IL 62701</h1>
<h1 style={{color:"#ffffff"}}>Monday - Saturday: 9 am - 11.30 pm</h1></div>

    <div style={{paddingRight:"100px"}}>
<b style={{ paddingLeft:"100px", fontSize:"40px"}}>Get in Touch with Us</b> <br/>
<b style={{paddingLeft:"165px"}}>   We’re Here to Help!</b>

<div  style={{color:"#999999", fontSize:"20px"}}>
<h4 style={{paddingLeft:"100px"}}>Delivering Exceptional Care and Advanced Medical</h4>
<h4 style={{paddingLeft:"100px"}}>Solutions for Your Health and Well-being</h4>

</div>
<div className="textform"> 
    <form className="formholder">
    <div className="textfield">
  <input  
  className="emailfield"
    type="email"
    placeholder="Your Email"
    required/>

<textarea className="MessageHolder"
     placeholder="Your Message"
     required
></textarea>
  
    </div>
<imput type="submit" value="Submit" className="submitbutton"/>
    </form>

    </div>


</div>
</div>
</div>
);
}



export default Page7;