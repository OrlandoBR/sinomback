"use strict";(self["webpackChunksinom_front"]=self["webpackChunksinom_front"]||[]).push([[317],{4144:function(a,o,e){e.r(o),e.d(o,{default:function(){return I}});var l=e(6252),s=e(9963),n=e(3577);const t=a=>((0,l.dD)("data-v-a00f4774"),a=a(),(0,l.Cn)(),a),r={class:"formularios"},c={class:"row"},i={class:"col-md-4"},p={class:"form-group"},d={class:"col"},m={class:"col"},u={class:"row"},_={class:"col-md-4"},h={class:"form-group"},b={class:"col-md-4"},v={class:"form-group"},y={class:"col-md-4"},z={class:"form-group"},f={class:"buttons"},C={class:"table table-hover tbl-resultados"},w=t((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"PLAZA"),(0,l._)("th",{scope:"col"},"SECCION"),(0,l._)("th",{scope:"col"},"MAESTRO"),(0,l._)("th",{scope:"col"},"NOMINA")])],-1))),g={scope:"row"};function N(a,o,e,t,N,A){const E=(0,l.up)("tituloBusqueda"),P=(0,l.up)("input_seccion"),M=(0,l.up)("input_nomina"),R=(0,l.up)("miModal"),k=(0,l.up)("myFooter");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(E,{titulo:"Consulta de Plazas",descripcion:"Realiza la busqueda de una plaza de acuerdo a los filtros."}),(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("div",i,[(0,l._)("div",p,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>N.plaza=a),onKeypress:o[1]||(o[1]=(...a)=>A.validaPlaza&&A.validaPlaza(...a)),onKeyup:o[2]||(o[2]=(...a)=>A.mayusc&&A.mayusc(...a)),class:"form-control","aria-describedby":"id",placeholder:"PLAZA"},null,544),[[s.nr,N.plaza]])])]),(0,l._)("div",d,[(0,l.Wm)(P,{onSeccion_val:A.obten_seccion},null,8,["onSeccion_val"])]),(0,l._)("div",m,[(0,l.Wm)(M)])]),(0,l._)("div",u,[(0,l._)("div",_,[(0,l._)("div",h,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=a=>N.paterno=a),onKeypress:o[4]||(o[4]=(...a)=>A.validaNombreComp&&A.validaNombreComp(...a)),onBlur:o[5]||(o[5]=(...a)=>A.algo&&A.algo(...a)),onKeydown:o[6]||(o[6]=(...a)=>A.mayusc&&A.mayusc(...a)),class:"form-control","aria-describedby":"id",placeholder:"APELLIDO PATERNO"},null,544),[[s.nr,N.paterno]])])]),(0,l._)("div",b,[(0,l._)("div",v,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>N.materno=a),onKeypress:o[8]||(o[8]=(...a)=>A.validaNombreComp&&A.validaNombreComp(...a)),onKeyup:o[9]||(o[9]=(...a)=>A.mayusc&&A.mayusc(...a)),class:"form-control","aria-describedby":"curp",placeholder:"APELLIDO MATERNO"},null,544),[[s.nr,N.materno]])])]),(0,l._)("div",y,[(0,l._)("div",z,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[10]||(o[10]=a=>N.nombre=a),onKeypress:o[11]||(o[11]=(...a)=>A.validaNombreComp&&A.validaNombreComp(...a)),onKeyup:o[12]||(o[12]=(...a)=>A.mayusc&&A.mayusc(...a)),class:"form-control","aria-describedby":"rfc",placeholder:"NOMBRE"},null,544),[[s.nr,N.nombre]])])])]),(0,l._)("div",f,[(0,l._)("a",{class:"btn-outline primary",onClick:o[13]||(o[13]=(...a)=>A.buscarplazas&&A.buscarplazas(...a))}," Buscar ")])]),(0,l._)("table",C,[w,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(N.arr_plazas,((a,o)=>((0,l.wg)(),(0,l.iD)("tr",{key:{index:o}},[(0,l._)("th",g,(0,n.zw)(o+1),1),(0,l._)("td",null,(0,n.zw)(a.plaza.toUpperCase()),1),(0,l._)("td",null,(0,n.zw)(a.id_seccion),1),(0,l._)("td",null,(0,n.zw)((a.ap_paterno+" "+a.ap_materno+" "+a.nombre).toUpperCase()),1),(0,l._)("td",null,(0,n.zw)(a.nomina.toUpperCase()),1)])))),128))])]),(0,l.Wm)(R,{titulo:"PLAZAS",mensaje:N.mensajeModal},null,8,["mensaje"]),(0,l.Wm)(k)],64)}var A=e(196);const E=(0,l.RC)((()=>e.e(286).then(e.bind(e,3286)))),P=(0,l.RC)((()=>e.e(751).then(e.bind(e,3751)))),M=(0,l.RC)((()=>e.e(313).then(e.bind(e,4313)))),R=(0,l.RC)((()=>e.e(664).then(e.bind(e,664)))),k=(0,l.RC)((()=>e.e(699).then(e.bind(e,699))));let O="",U="",B="",D="",K="",L="",j="";var x={components:{input_seccion:E,input_nomina:P,myFooter:M,tituloBusqueda:R,miModal:k},data(){return{plaza:O,nombre:D,paterno:U,materno:B,seccion:K,nomina:L,mensajeModal:j,arr_plazas:[]}},methods:{async buscarplazas(){let a={plaza:this.plaza,seccion:this.seccion,ap_pat:this.paterno,ap_mat:this.materno,nombre:this.nombre,nomina:this.nomina};console.log("Buscando..");try{const o=await this.obtenerPlazas(a),{estatus:e,errorText:l,num_registros:s,resultado:n}=o;console.log(o),"error"===e&&(this.mensajeModal=l,$("#staticBackdrop2").modal("show")),"ok"===e&&(s<1?(this.mensajeModal="No se encontro información",$("#staticBackdrop2").modal("show")):(this.arr_plazas=o.resultado,console.log("RESULTADO::",n)))}catch(o){console.log(o),this.mensajeModal=o.data.errorText,$("#staticBackdrop2").modal("show")}},async obtenerPlazas(a){try{var o=JSON.stringify(a);console.log(o);const e=await A.ZP.get("http://localhost:8081/api/plazas",{params:{plaza:this.plaza,seccion:this.seccion,ap_pat:this.paterno,ap_mat:this.materno,nombre:this.nombre,nomina:this.nomina}});return e.data}catch(e){return console.log(e),e.response.data}},obten_seccion(a){this.seccion=a},validaPlaza(a){this.plaza.length>=16&&a.preventDefault()},validaNombreComp(a){a.srcElement.value.length>=25&&a.preventDefault()},mayusc(a){a.srcElement.value=a.srcElement.value.toUpperCase()},algo(a){a.srcElement.value=a.srcElement.value.toUpperCase()}}},S=e(3744);const T=(0,S.Z)(x,[["render",N],["__scopeId","data-v-a00f4774"]]);var I=T}}]);
//# sourceMappingURL=consulta plaza.6f809e40.js.map