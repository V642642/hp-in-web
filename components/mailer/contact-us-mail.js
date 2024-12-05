import axios from "axios";

function ContactUsMail(mail , name , lastname) {

  let Subject = "Thank you for signing up | hiringplug™ AI marketplace of recruiters";
  let body = `<body style="background: #e2e2e2;font-family: arial,sans-serif;">
 	
	<div id="page-wrap"> 
	     
	    <section class="section-accomd bg-white inner-margin-request section-padding" style="background: #e2e2e2;">
		  <div class="container">
			<div class=" ">           
			    <div class="row"> 
								
				  <div class="col-md-12"> 
					<br><br>
    <div class="bg-white" >
     <table width="95%" cellspacing="0" cellpadding="5" border="0" style="padding:20px 40px;background: #ffffff;margin-left:30px;">
     <tbody>
     
     <tr>
	<td style="color:#333333;" colspan="3">
	  <font style="font-size:17px;color:#000000;font-weight:bold;"><span style="font-size:14px;">Hi ${name}&nbsp;${lastname}</span></font>
	  
	</td>
     </tr>
    
     <tr>
	<td style="color:#000000;font-size:14px;" colspan="3">Thanks for signing-up with <strong><i>hiringplug™</i></strong> - AI marketplace of specialist recruiters.<br><br>
	
     
		We're really excited to have you on-board and will soon share a <strong><i>preview & exclusive benefits</i></strong>  of our award winning: <b><i>RaaS - Recruitment as a Service Marketplace</i></b>  to power up your hiring experience. 
 
    <br><br><br>
	</td>
     </tr> 

     <tr><td><a href="https://www.hiringplug.com/"><img alt="hiringplug™" style="width:300px" src="https://ca.hiringplug.com/imgpsh_fullsize_anim.png" /></a></td></tr>
     <br>
     <tr><td>Meanwhile, feel free to connect if you have any questions or collaboration ideas. Talk to you soon!
</td></tr>

<tr><td>Stay <i><b>plug</b>ged,</i></td></tr>
    
    </tbody></table>
					    
     <table width="95%" cellspacing="0" cellpadding="0" border="0" style="padding:20px 40px;background: #ffffff;margin-left:30px;">
	  <tbody>
	
	  <tr>
	   <td style="color:#000;font-size:13px;" align="left">
		hiringplug technologies Inc.
	   </td>
	  </tr>
	  <tr><td height="5"></td></tr>
	  <tr>
	   <td style="color:#000;font-size:13px;" align="left">
	    <a href="https://www.hiringplug.com/" target="_blank"><img src="https://www.hiringplug.com/images/logo-footer.png" alt="footer-logo" style="width: 160px;"> </a>
	   </td>
	  </tr>
	 
    </tbody>
    </table>
					    
				   </div>                            
				  </div> 
			    </div>
			</div> 
		  </div> 
		  <br><br>
		  <div style="background-color: #444;padding: 6px 10px;">
			    <div class="container">
				<div class="col-md-12 text-left"> 
				<table style="color: #ffffff !important;font-size:12px;">
				<tr>
				<td>
				 This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message.
			     </td>
			    </tr>
			     </table>
			     </div> 
			    </div>
			</div> 
		  </div>
	    </section> 
	</div>  
    </body>`;

  let payload = {"emailto":[{"emailid":mail,"agencyname":name},{'emailid' : 'contact@hiringplug.com' , 'agencyname' : 'Admin'},{'emailid' : 'vishal@hiringplug.com' , 'agencyname' : 'Admin'}],"mailtext":body,"subject":Subject};  
  axios
    .post(
      `https://api-in.hiringplug.com/manage-mail-service/v1/send-custom-mail`,
      payload , {
        headers : {
            'Content-Type': 'application/json',
          } 
      }
    )
    .then((res) => {
      if (res?.data.status) {
       console.log(res)
      }
    });
}

export default ContactUsMail;
