import axios from "axios";

function CareerMail(mail , name , lastname) {

  let Subject = "Thanks for your application to hiringplug TM";
  let body = `<body style="background: #e2e2e2;font-family: arial,sans-serif;">
 	
  <div id="page-wrap">      
      <section class="section-accomd bg-white inner-margin-request section-padding" style="background: #e2e2e2;">
          <div class="container">
              <div class=" ">           
                  <div class="row"> 
                                            
                      <div class="col-md-12"> 
                          <br>
<div class="bg-white" >
 <table width="95%" cellspacing="0" cellpadding="5" border="0" style="padding:20px 40px;background: #ffffff;margin-left:30px;">
 <tbody><tr>
  <td style="color:#333333;" colspan="3">
    <font style="font-size:17px;color:#000000;font-weight:bold;"><span style="font-size:14px;">Hey ${name}&nbsp;${lastname},</span></font>
   <hr>
  </td>
 </tr>

 <tr>
  <td style="color:#000000;font-size:14px;" colspan="3">Thanks for your application to hiringplug<sup style="font-size:9px !important;"><strong style="font-size:9px !important;">TM</strong></sup>  <br><br>
  
 
We will carefully go through your profile and get back to you if we find a fitment. <br>Meanwhile, please visit our <a href="https://blog.hiringplug.com/" style="color: #000000;text-decoration:none;" target="_blank"><strong>Blog</strong></a> for some Tips,     Tricks and Insights about hiring! 
<br><br><br><br>
<em>Stay <strong>Plug</strong>ged,</em>

<br><br> 
Vikramjit Singh Sahaye<br>
Founder & CEO<br>
  </td>
 </tr>
 <tr><td height="5">&nbsp;</td></tr>

</tbody></table>
                              
 <table width="95%" cellspacing="0" cellpadding="0" border="0" style="padding:20px 40px;background: #ffffff;margin-left:30px;">
    <tbody>
    <tr>
     <td style="color:#000;font-size:13px;" align="left">
      TalenTECH Solutions Private Limited
     </td>
    </tr>
    <tr><td height="5"></td></tr>
    <tr>
     <td style="color:#000;font-size:13px;" align="left">
      <a href="https://www.hiringplug.com/" target="_blank"><img src="https://www.hiringplug.com/images/logo-footer.png" alt="fotterlogo" style="width: 160px;"> </a>
     </td>
    </tr>
    <tr><td height="25"></td></tr>   
    <tr>
     <td style="color:#000;font-size:13px;" align="left">
      Need Help? &nbsp;Mail us at: <a href="mailto:contact@hiringplug.com" style="font-size:13px;color: #00a63f;text-decoration:none;">contact@hiringplug.com</a>
     </td>
    </tr> 
 <tr><td height="25"></td></tr> 
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
              <div class="clearfix"></div>
          </div> 
      </section> 
        
  </div>  
</body>`;

  let payload = {"emailto":[{"emailid":mail,"agencyname":name} , {'emailid' : 'contact@hiringplug.com' , 'agencyname' : 'Admin'},{'emailid' : 'vishal@hiringplug.com' , 'agencyname' : 'Admin'}],"mailtext":body,"subject":Subject};  

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

export default CareerMail;
