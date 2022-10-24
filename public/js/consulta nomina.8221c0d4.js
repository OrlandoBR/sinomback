"use strict";(self["webpackChunksinom_front"]=self["webpackChunksinom_front"]||[]).push([[221],{9139:function(o,a,e){e.r(a),e.d(a,{default:function(){return V}});var n=e(6252),t=e(9963),l=e(3577);const s=o=>((0,n.dD)("data-v-0626d94e"),o=o(),(0,n.Cn)(),o),r={class:"formularios"},c={class:"row"},i={class:"col-md-4"},p={class:"form-group"},u={class:"col"},d={class:"col"},m={class:"row"},_={class:"col-md-4"},h={class:"form-group"},b={class:"col-md-4"},v={class:"form-group"},y={class:"col-md-4"},w={class:"form-group"},f={class:"buttons"},C={class:"table table-hover tbl-resultados"},g=s((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"#"),(0,n._)("th",{scope:"col"},"CURP"),(0,n._)("th",{scope:"col"},"MAESTRO"),(0,n._)("th",{scope:"col"},"PLAZA"),(0,n._)("th",{scope:"col"},"TIPO"),(0,n._)("th",{scope:"col"},"CONCEPTO"),(0,n._)("th",{scope:"col"},"IMPORTE"),(0,n._)("th",{scope:"col"},"SECCION"),(0,n._)("th",{scope:"col"},"QNAPAGO"),(0,n._)("th",{scope:"col"},"CONTRATO"),(0,n._)("th",{scope:"col"},"ORDEN"),(0,n._)("th",{scope:"col"},"CVE.BENEF"),(0,n._)("th",{scope:"col"},"NOMINA")])],-1))),N={scope:"row"};function z(o,a,e,s,z,O){const R=(0,n.up)("tituloBusqueda"),E=(0,n.up)("input_seccion"),A=(0,n.up)("input_nomina"),M=(0,n.up)("miModal"),D=(0,n.up)("myFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(R,{titulo:"Consulta de Nomina",descripcion:"Realiza la busqueda de un maestro de acuerdo a los filtros."}),(0,n._)("div",r,[(0,n._)("div",c,[(0,n._)("div",i,[(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>z.curp=o),onKeypress:a[1]||(a[1]=(...o)=>O.valida_curp&&O.valida_curp(...o)),onFocus:a[2]||(a[2]=(...a)=>o.limpia&&o.limpia(...a)),class:"form-control","aria-describedby":"id",placeholder:"CURP"},null,544),[[t.nr,z.curp]])])]),(0,n._)("div",u,[(0,n.Wm)(E,{onSeccion_val:a[3]||(a[3]=o=>z.seccion=o)})]),(0,n._)("div",d,[(0,n.Wm)(A,{onNomina_val:a[4]||(a[4]=o=>z.nomina=o)})])]),(0,n._)("div",m,[(0,n._)("div",_,[(0,n._)("div",h,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=o=>z.paterno=o),onKeypress:a[6]||(a[6]=(...o)=>O.valida_paterno&&O.valida_paterno(...o)),onKeyup:a[7]||(a[7]=o=>O.mayuscula()),onFocus:a[8]||(a[8]=(...a)=>o.limpia&&o.limpia(...a)),class:"form-control","aria-describedby":"id",placeholder:"APELLIDO PATERNO"},null,544),[[t.nr,z.paterno]])])]),(0,n._)("div",b,[(0,n._)("div",v,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[9]||(a[9]=o=>z.materno=o),onKeypress:a[10]||(a[10]=(...o)=>O.valida_materno&&O.valida_materno(...o)),onKeyup:a[11]||(a[11]=o=>O.mayuscula()),onFocus:a[12]||(a[12]=(...a)=>o.limpia&&o.limpia(...a)),class:"form-control","aria-describedby":"curp",placeholder:"APELLIDO MATERNO"},null,544),[[t.nr,z.materno]])])]),(0,n._)("div",y,[(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":a[13]||(a[13]=o=>z.nombre=o),onKeypress:a[14]||(a[14]=(...o)=>O.valida_nombre&&O.valida_nombre(...o)),onKeyup:a[15]||(a[15]=o=>O.mayuscula()),onFocus:a[16]||(a[16]=(...a)=>o.limpia&&o.limpia(...a)),class:"form-control","aria-describedby":"rfc",placeholder:"NOMBRE"},null,544),[[t.nr,z.nombre]])])])]),(0,n._)("div",f,[(0,n._)("a",{class:"btn-outline primary",onClick:a[17]||(a[17]=(...o)=>O.buscarnomina&&O.buscarnomina(...o))}," Buscar ")])]),(0,n._)("table",C,[g,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(z.arr_nomina,((a,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:{index:e}},[(0,n._)("th",N,(0,l.zw)(e+1),1),(0,n._)("td",null,(0,l.zw)(a.curp),1),(0,n._)("td",null,(0,l.zw)(a.nom_completo),1),(0,n._)("td",null,(0,l.zw)(a.plaza),1),(0,n._)("td",null,(0,l.zw)(a.tipo_cpto),1),(0,n._)("td",null,(0,l.zw)(a.concepto),1),(0,n._)("td",null,(0,l.zw)(o.dollarUSLocale.format(a.importe)),1),(0,n._)("td",null,(0,l.zw)(a.seccion),1),(0,n._)("td",null,(0,l.zw)(a.qna_pago),1),(0,n._)("td",null,(0,l.zw)(a.contrato),1),(0,n._)("td",null,(0,l.zw)(a.num_orden),1),(0,n._)("td",null,(0,l.zw)(a.cve_benef),1),(0,n._)("td",null,(0,l.zw)(a.nomina),1)])))),128))])]),(0,n.Wm)(M,{titulo:"NOMINA",mensaje:z.mensajeModal},null,8,["mensaje"]),(0,n.Wm)(D)],64)}var O=e(196);const R=(0,n.RC)((()=>e.e(286).then(e.bind(e,3286)))),E=(0,n.RC)((()=>e.e(751).then(e.bind(e,3751)))),A=(0,n.RC)((()=>e.e(313).then(e.bind(e,4313)))),M=(0,n.RC)((()=>e.e(664).then(e.bind(e,664)))),D=(0,n.RC)((()=>e.e(699).then(e.bind(e,699))));let U,P="",T="",k="",B="",I="",F="",K=[],j="";Intl.NumberFormat("en-US");var x={components:{input_seccion:R,input_nomina:E,myFooter:A,tituloBusqueda:M,miModal:D},data(){return{curp:P,paterno:T,materno:k,nombre:B,seccion:I,nomina:F,plaza:U,mensajeModal:j,arr_nomina:K}},methods:{async buscarnomina(){console.log("Buscando..");try{const o=await this.obtenerNomina(),{estatus:a,errorText:e,num_registros:n,resultado:t}=o;console.log(o),"error"===a&&(this.mensajeModal=e,$("#staticBackdrop2").modal("show")),"ok"===a&&(n<1?(this.mensajeModal="No se encontro información",$("#staticBackdrop2").modal("show")):(this.arr_nomina=o.resultado,console.log("RESULTADO::",t)))}catch(o){console.log(o),this.mensajeModal=o.data.errorText,$("#staticBackdrop2").modal("show")}},async obtenerNomina(){try{const o=await O.ZP.get("http://localhost:8081/api/nominapago",{params:{seccion:this.seccion,curp:this.curp,ap_pat:this.paterno,ap_mat:this.materno,nombre:this.nombre,nomina:this.nomina,plaza:this.plaza}});return o.data}catch(o){return console.log(o),o.response.data}},valida_curp(o){this.curp.length>=18&&o.preventDefault()},valida_paterno(o){this.paterno.length>=25&&o.preventDefault()},valida_materno(o){this.materno.length>=25&&o.preventDefault()},valida_nombre(o){this.nombre.length>=25&&o.preventDefault()},mayuscula(){this.nombre=this.nombre.toUpperCase(),this.paterno=this.paterno.toUpperCase(),this.materno=this.materno.toUpperCase()}}},L=e(3744);const S=(0,L.Z)(x,[["render",z],["__scopeId","data-v-0626d94e"]]);var V=S}}]);
//# sourceMappingURL=consulta nomina.8221c0d4.js.map