class e{constructor(){this.navLink=document.querySelectorAll("li.nav__link"),this.toggleMenu=document.getElementsByClassName("toggle__button")[0],this.bars=document.querySelector(".bars"),this.events()}events(){this.toggleMenu.addEventListener("click",(()=>this.toggle())),this.navLink.forEach((e=>e.addEventListener("click",(()=>this.toggle()))))}open(){this.bars.classList.add("open")}close(){this.bars.classList.remove("open")}toggle(){for(let e=0;e<this.navLink.length;e++)this.navLink[e].classList.contains("active")?(this.close(),this.navLink[e].classList.remove("active")):(this.open(),this.navLink[e].classList.add("active"))}}class t{constructor(){this.modal=document.querySelector(".modal"),this.closeButton=document.querySelector(".close__button"),this.title=document.querySelector(".modal__title"),this.body=document.querySelector(".modal__body"),this.events()}events(){window.addEventListener("click",(e=>{e.target==this.modal&&this.close()})),this.closeButton.addEventListener("click",(()=>{this.close()}))}show(e,t,s){this.modal.style.display="block",this.title.innerText=t,this.title.style.color=`${s}`,this.body.innerHTML=` <p>${e}</p>`,this.modal.style.color=`${s}`}close(){this.modal.style.display="none"}}class s{constructor(){this.form=document.querySelector("#contact__form"),this.allFields=document.querySelectorAll("#contact__form .form__control"),this.insertValidationElements(),this.name=document.querySelector("#name"),this.name.previousValue="",this.email=document.querySelector("#email"),this.email.previousValue="",this.message=document.querySelector("#message"),this.message.previousValue="",this.modal=new t,this.events()}events(){this.form.addEventListener("submit",(e=>{e.preventDefault(),this.formSubmitHandler()})),this.name.addEventListener("keyup",(()=>{this.isDifferent(this.name,this.nameHandler)})),this.name.addEventListener("blur",(()=>{this.isDifferent(this.name,this.nameHandler)})),this.email.addEventListener("keyup",(()=>{this.isDifferent(this.email,this.emailHandler)})),this.email.addEventListener("blur",(()=>{this.isDifferent(this.email,this.emailHandler)})),this.message.addEventListener("keyup",(()=>{this.isDifferent(this.message,this.messageHandler)})),this.message.addEventListener("blur",(()=>{this.isDifferent(this.message,this.messageHandler)}))}isDifferent(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value}formSubmitHandler(){this.emailAfterDelay(),this.messageImmediately(),this.messageAfterDelay(),this.name.errors||this.email.errors||this.message.errors||this.submitHandler()}async submitHandler(){const e={email:this.email.value,name:this.name.value,message:this.message.value},t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};try{const e=await fetch("https://email-receiver.herokuapp.com/contact",t);return await e.json()}catch(e){this.modal.show("There was an error while submitting this data","Warning","warning")}finally{this.modal.show("information successfully submitted, I really appreciate it!","Success","success"),this.formReset()}}formReset(){this.name.value="",this.email.value="",this.message.value=""}nameHandler(){this.name.errors=!1,this.nameImmediately(),clearTimeout(this.name.timer),this.name.timer=setTimeout((()=>this.nameAfterDelay()),800)}nameImmediately(){""!==this.name.value&&this.name.value.length<5&&this.showValidationError(this.name,"Please provide a longer name."),this.name.value.length>50&&this.showValidationError(this.name,"Your name cannot exceed 50 characters."),this.name.errors||this.hideValidationError(this.name)}nameAfterDelay(){this.name.value>30&&this.name.value.length>=1&&this.showValidationError(this.name,"Name is too short."),this.name.errors||this.hideValidationError(this.name)}emailHandler(){this.email.errors=!1,clearTimeout(this.email.timer),this.email.timer=setTimeout((()=>this.emailAfterDelay()),800)}emailAfterDelay(){/^\S+@\S+$/.test(this.email.value)||this.showValidationError(this.email,"Please provide a valid email address."),this.email.value||this.hideValidationError(this.email),this.email.errors||this.hideValidationError(this.email)}messageHandler(){this.message.errors=!1,this.messageImmediately(),clearTimeout(this.message.timer),this.message.timer=setTimeout((()=>this.messageAfterDelay()),800)}messageImmediately(){""!==this.message.value&&this.message.value.length<150&&this.showValidationError(this.message,"Please write at least 150 characters."),this.message.value.length>1e3&&this.showValidationError(this.message,"Your message can not exceed 500 characters."),this.message.errors||this.hideValidationError(this.message)}messageAfterDelay(){this.message.value<50&&this.message.value.length>=1&&this.showValidationError(this.message,"Your message is too short."),this.message.errors||this.hideValidationError(this.message)}hideValidationError(e){e.nextElementSibling.classList.remove("liveValidateMessage__visible")}showValidationError(e,t){e.nextElementSibling.innerHTML=`<p>${t}</p>`,e.nextElementSibling.classList.add("liveValidateMessage__visible"),e.errors=!0}insertValidationElements(){this.allFields.forEach((e=>{e.insertAdjacentHTML("afterend",'\n                         <div class="alert danger liveValidateMessage small">\n                             \n                         </div>\n                     ')}))}}document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".toggle__button")&&new e,document.querySelector(".modal")&&new t,document.querySelector(".contact__form")&&(new s,(new s).formReset())}));