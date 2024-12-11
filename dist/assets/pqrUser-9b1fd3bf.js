import{q as x,a as f,U as g,k as O,_ as Y,r as c,o as J,c as v,d as h,e as _,h as d,D as b,f as e,j as m,F as K,z as V,A,I as T,p as W,m as X}from"./index-ec21b7cc.js";const Z="/assets/CERRADO-fabb8291.jpeg",ee={store:x(),resolve(){this.store.setLoading(!1,"")},async getPqrsByPlaceId(n){this.store.setLoading(!0,"Cargando PQRS");try{const o=await f.get(`${g}/get-pqrs-by-place-id/${n}`);return o.status===200?(this.resolve(),o.data):(console.error("No se ha podido cargar las PQRS"),this.resolve(),null)}catch(o){throw console.error("Error al cargar las PQRS:",o),this.resolve(),new Error("Error al cargar las PQRS")}},async createPqrs(n){this.store.setLoading(!0,"Creando PQRS");try{const o=await f.post(`${g}/create_pqrs/`,n);return o.status===200?(this.resolve(),o.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(o){throw console.error("Error al crear la PQRS:",o),this.resolve(),new Error("Error al crear la PQRS")}},async updatePqrs(n,o){this.store.setLoading(!0,"Editando PQRS");try{const u=await f.put(`${g}/update_pqrs/${o}`,n);return u.status===200?(this.resolve(),u.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(u){throw console.error("Error al crear la PQRS:",u),this.resolve(),new Error("Error al crear la PQRS")}},async deletePqrs(n){this.store.setLoading(!0,"Eliminando PQRS");try{const o=await f.delete(`${g}/delete_pqrs/${n}`);return o.status===200?(this.resolve(),o.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(o){throw console.error("Error al crear la PQRS:",o),this.resolve(),new Error("Error al crear la PQRS")}}},U={router:O,async get(n,o,u={}){const i=x();try{o?i.setLoading(!0,o):i.setLoading(!0,"cargando");const r={headers:u.headers||{}},a=await f.get(n,r);return a.status===200?(i.setLoading(!1),a.data):(i.setLoading(!1),console.error("An error occurred while fetching data:",a.status),null)}catch(r){return i.setLoading(!1),console.error("An error occurred while fetching data:",r),null}},async post(n,o,u,i=null){const r=x();try{r.setLoading(!0,u);const a=await f.post(n,o);return a.status===200||a.status===201?(r.setLoading(!1),i&&this.router.push(i),a.data):(r.setLoading(!1),console.error("An error occurred while posting data:",a.status),null)}catch(a){return r.setLoading(!1),console.error("An error occurred while posting data:",a),null}},async put(n,o,u,i=null){const r=x();try{r.setLoading(!0,u);const a=await f.put(n,o);return a.status===200||a.status===204?(r.setLoading(!1),i&&this.router.push(i),a.data):(r.setLoading(!1),console.error("An error occurred while updating data:",a.status),null)}catch(a){return r.setLoading(!1),console.error("An error occurred while updating data:",a),null}},async delete(n,o,u=null){const i=x();try{i.setLoading(!0,o);const r=await f.delete(n);return r.status===200||r.status===204?(i.setLoading(!1),u&&this.router.push(u),r.data):(i.setLoading(!1),console.error("An error occurred while deleting data:",r.status),null)}catch(r){return i.setLoading(!1),console.error("An error occurred while deleting data:",r),null}}};const p=n=>(W("data-v-1df7d46c"),n=n(),X(),n),te={style:{height:"auto",color:"black","background-color":"white",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},oe=p(()=>e("h4",null,"Hemos recibido su solicitud y ha quedado registrada con el id ",-1)),se=p(()=>e("br",null,null,-1)),le={class:"text-center",style:{width:"auto","font-size":"3rem"}},re={style:{height:"auto",color:"black",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},ae=p(()=>e("br",null,null,-1)),ne=p(()=>e("b",null,[e("p",{class:"text-center",style:{width:"auto","font-size":"3rem"}}," Muchas gracias")],-1)),ie={class:"container mt-8 col-12 p-4 shadow-3",style:{"max-width":"400px",margin:"auto","background-color":"white"}},ue=p(()=>e("h2",{class:"mb-0"},[V("🔥 "),e("b",null,"BURGER AYUDA"),V(" 🔥")],-1)),de=p(()=>e("h2",{style:{color:"var(--primary-color)"},class:"my-0"},[e("b",null,"Cada dia mejoramos")],-1)),ce=p(()=>e("img",{src:Z,style:{width:"100%"}},null,-1)),pe={class:"form",style:{width:"100%",display:"flex","flex-direction":"column",gap:"1rem"}},ve={class:"input"},he=p(()=>e("h5",{class:"field"},"¿Cómo te podemos ayudar?",-1)),_e={key:0,class:"input"},me=p(()=>e("h5",{class:"field"},"Por favor clasifica tu inconveniente",-1)),fe={style:{display:"flex","align-items":"center",gap:"1rem"}},ge={class:"p-0 m-0"},ye={style:{display:"flex","align-items":"center",gap:"1rem"}},we={class:"p-0 m-0"},be={key:1,class:"input"},Ve=p(()=>e("h5",{class:"field"},"Sede",-1)),Se={key:2,class:"input"},Pe=p(()=>e("h5",{class:"field"},[V("ID de la orden ejemplo "),e("b",null,"BRE-0554")],-1)),xe={key:3,class:"input p-3",style:{"background-color":"#00f3ff29"}},Le=p(()=>e("h5",{class:"field"},"Califícanos",-1)),Re={key:4,class:"input"},ke=p(()=>e("h5",{class:"field"},"Comentarios",-1)),Ee={key:5,class:"input"},qe=p(()=>e("h5",{class:"field"},"Nombre",-1)),Ue={key:6,class:"input"},Qe=p(()=>e("h5",{class:"field"},"Número de teléfono",-1)),Ie={key:7,class:"input"},De=p(()=>e("h5",{class:"field"},"Dirección (opcional)",-1)),Ae={class:"input",style:{display:"flex","justify-content":"end"}},Ce={__name:"pqrUser",setup(n){const o=c(),u=c({}),i=c(!1),r=c([]),a=c(!1),l=c(),S=c(),C=c([]),N=c([]),L=c(""),R=c(""),k=c(""),Q=c(""),E=c(""),q=c(null),$=c([{}]),z=async()=>{r.value=await ee.getPqrsByPlaceId(1)},G=async()=>{var s,w,P;if(!l.value){alert("Por favor, seleccione un tipo de requerimiento.");return}if(l.value==9&&!L.value){alert("Por favor, ingrese el ID de la orden.");return}if(l.value!=8&&!u.value){alert("Por favor, Clasifica tu inconveniente");return}if(l.value!=8&&!E.value){alert("Por favor, Cuentenos lo sucedido");return}if(l.value!=8&&(!R.value||!k.value)){alert("Por favor, complete los campos obligatorios (nombre y teléfono).");return}if(!S.value){alert("Por favor, Seleccione la sede");return}if(l.value==8&&!q.value){alert("Por favor, Seleccione una calificacion");return}const B={data:{reques_type_id:l.value,content:E.value||"Sin comentarios",channel_id:1,rating:q.value||null,site_id:S.value||null,order_id:L.value||null,network_id:4,tag_id:((s=u.value)==null?void 0:s.id)||7,restaurant_id:2},user:{user_name:R.value||"",user_phone:((w=k.value)==null?void 0:w.toString())||"",user_address:Q.value||"",site_id:S.value||null}};try{const y=await U.post(`${g}/create-pqr`,B);o.value=(P=y==null?void 0:y.pqr_id[0])==null?void 0:P.id,l.value==8?(a.value=!0,emi):i.value=!0}catch{}};return J(async()=>{z(),N.value=await U.get(`${g}/get-all-pqrs-types`),C.value=await U.get(`${g}/sites`),$.value=await U.get(`${g}/get-all-pqr-tags`),l.value=8}),(B,s)=>{const w=v("Button"),P=v("router-link"),y=v("Dialog"),I=v("Dropdown"),j=v("Tag"),D=v("InputText"),F=v("Rating"),H=v("Textarea"),M=v("InputNumber");return h(),_(K,null,[d(y,{class:"mx-4",visible:i.value,"onUpdate:visible":s[0]||(s[0]=t=>i.value=t),modal:"",style:{width:"30rem","background-color":"white"}},{default:b(()=>[e("div",te,[oe,V(),se,e("b",null,[e("p",le,A(o.value),1)]),d(P,{to:"/"},{default:b(()=>[d(w,{class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})]),_:1})])]),_:1},8,["visible"]),d(y,{class:"mx-4",visible:a.value,"onUpdate:visible":s[1]||(s[1]=t=>a.value=t),modal:"",style:{width:"30rem","background-color":"white"}},{default:b(()=>[e("div",re,[ae,ne,d(P,{to:"/"},{default:b(()=>[d(w,{class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})]),_:1})])]),_:1},8,["visible"]),e("div",ie,[ue,de,ce,e("div",pe,[e("div",ve,[he,d(I,{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value=t),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:N.value.filter(t=>t.show_on_web),optionLabel:"name"},null,8,["modelValue","options"])]),l.value&&l.value!=8?(h(),_("div",_e,[me,d(I,{options:$.value,modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=t=>u.value=t),style:{width:"100%"}},{option:b(t=>[e("div",fe,[d(j,{style:T([`background-color:${t.option.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),V(),e("h6",ge,A(t.option.name),1)])]),value:b(t=>[e("div",ye,[d(j,{style:T([`background-color:${t.value.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),V(),e("h6",we,A(t.value.name),1)])]),_:1},8,["options","modelValue"])])):m("",!0),l.value?(h(),_("div",be,[Ve,d(I,{options:C.value.filter(t=>t.show_on_web),modelValue:S.value,"onUpdate:modelValue":s[4]||(s[4]=t=>S.value=t),optionValue:"site_id",optionLabel:"site_name",style:{width:"100%"}},null,8,["options","modelValue"])])):m("",!0),l.value&&l.value==9?(h(),_("div",Se,[Pe,d(D,{modelValue:L.value,"onUpdate:modelValue":s[5]||(s[5]=t=>L.value=t),style:{width:"100%"},placeholder:"Escriba el número de la orden"},null,8,["modelValue"])])):m("",!0),l.value&&(l.value==9||l.value==8)?(h(),_("div",xe,[Le,d(F,{modelValue:q.value,"onUpdate:modelValue":s[6]||(s[6]=t=>q.value=t),cancel:!1},null,8,["modelValue"])])):m("",!0),l.value?(h(),_("div",Re,[ke,d(H,{modelValue:E.value,"onUpdate:modelValue":s[7]||(s[7]=t=>E.value=t),rows:"5",style:{width:"100%",resize:"none"},placeholder:"Deja tus comentarios"},null,8,["modelValue"])])):m("",!0),l.value?(h(),_("div",Ee,[qe,d(D,{modelValue:R.value,"onUpdate:modelValue":s[8]||(s[8]=t=>R.value=t),style:{width:"100%"},placeholder:"Escriba su nombre por favor"},null,8,["modelValue"])])):m("",!0),l.value?(h(),_("div",Ue,[Qe,d(M,{useGrouping:!1,modelValue:k.value,"onUpdate:modelValue":s[9]||(s[9]=t=>k.value=t),style:{width:"100%"},placeholder:"Escriba su número de teléfono"},null,8,["modelValue"])])):m("",!0),l.value?(h(),_("div",Ie,[De,d(D,{modelValue:Q.value,"onUpdate:modelValue":s[10]||(s[10]=t=>Q.value=t),style:{width:"100%"},placeholder:"Escriba su dirección"},null,8,["modelValue"])])):m("",!0),e("div",Ae,[d(w,{label:"Enviar",style:{"font-weight":"bold"},severity:"info",onClick:G})])])])],64)}}},$e=Y(Ce,[["__scopeId","data-v-1df7d46c"]]);export{$e as default};