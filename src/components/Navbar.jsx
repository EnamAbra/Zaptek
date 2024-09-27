function Navbar(){

    return(
        <div>
<div style ={{
    display:"flex",
    justifyContent:"space-between",
    padding: "20px",
    backgroundColor:	 "#4CAF4F"
}}>
    
<div style={{paddingLeft:"150px", color:"#ffffff"}}><h1>555-0198    123 Maple Street, Spriengfield, IL 62701</h1></div>
<div style={{paddingRight:"165px",color:"#ffffff"}}><h1 >Monday - Saturday: 9 am - 11.30 pm</h1></div>

</div>
<div style={{ display: "flex",paddingTop:"15px" }}>
 <div style={{paddingLeft:"150px",paddingRight:"340px"}}>  <img src="/src/assets/healthsquare.svg"/></div>
      
        <option style={{ paddingRight: "30px" }}>Home</option>
        <option style={{ paddingRight: "30px" }}>About</option>
        <option style={{ paddingRight: "30px" }}>Services</option>
        <option style={{ paddingRight: "30px" }}>Pricing</option>
      <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Pages</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
  </div>
  


</div>
      
        <option style={{ paddingRight: "30px" }}>Blog  </option>
        <option style={{ paddingRight: "30px" }}>Contact</option>
        <option style={{ paddingRight: "30px" }}>Cart</option>
        <button
          style={{
            color: "white",
            border: "none",
            backgroundColor: "#4CAF4F",
            Type: "Primary",
            Size: "Medium",
            State: "Default",
            Icon: "Right",
            width: "Hug (133.25px)",
            height: "Hug (36.49px)",
            padding: "9px 22px 9px 22px",
            gap: "5.57px",
            
            marginBottom: "10px",
          }}
        >
          Get Started
        </button>
      
      </div>
</div>

    );
}
export default Navbar;