"use strict";(self["webpackChunksinom_front"]=self["webpackChunksinom_front"]||[]).push([[428],{7206:function(o,a,i){i.r(a),i.d(a,{default:function(){return X}});var s=i(3396),l=i(9242),e=i(7139);const t={class:"formularios"},c=(0,s._)("div",{class:"datos-banco"},[(0,s._)("article",null,"DATOS GENERALES")],-1),n={class:"row"},d={class:"col-md-4"},r={class:"col-md-4"},p={class:"form-group"},u={class:"col-md-4"},v={class:"form-group"},m={class:"slc"},_=(0,s.uE)('<option value="null">CATEGORIA</option><option value="A01035">A01035</option><option value="A01803">A01803</option><option value="A01805">A01805</option><option value="A01806">A01806</option><option value="A01807">A01807</option><option value="A01820">A01820</option><option value="A03803">A03803</option><option value="A05009">A05009</option><option value="A08006">A08006</option>',10),g=[_],h=(0,s.uE)('<div class="row"><div class="col-md-4"><div class="form-group"><div class="slc"><select id="select-model"><option value="0">NIVEL</option><option value="1">NIVEL 1</option><option value="2">NIVEL 2</option><option value="3">NIVEL 3</option></select></div></div></div><div class="col-md-4"><div class="form-group"><div class="slc"><select id="select-model"><option value="0">ZONA</option><option value="1">ZONA 1</option><option value="2">ZONA 2</option><option value="3">ZONA 3</option></select></div></div></div></div>',1),A={class:"row"},w={class:"col-md-4"},C={class:"form-group"},f={class:"col-md-4"},y={class:"form-group"},N={class:"sec_plaza"},b={class:"row"},z={class:"col"},E=(0,s.Uk)("Seccion Plaza : "),k={class:"plaza"},O={class:"row"},I={class:"col"},V=(0,s.Uk)("Codigo Plaza : "),D={class:"plaza"},S={key:0,class:"row"},L={class:"col"},M={class:"plaza error"},R={class:"buttons"},U=(0,s._)("a",{href:" ",class:"btn-outline primary"}," Carga Masiva ",-1);function Z(o,a,i,_,Z,H){const G=(0,s.up)("tituloBusqueda"),P=(0,s.up)("input_seccion"),W=(0,s.up)("miModal"),q=(0,s.up)("myFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(G,{titulo:"Alta de Plaza",descripcion:"Da de alta la plaza para poder ser asiganada a maestro"}),(0,s._)("div",t,[c,(0,s._)("div",n,[(0,s._)("div",d,[(0,s.Wm)(P,{onSeccion_val:a[0]||(a[0]=o=>Z.seccion=o)})]),(0,s._)("div",r,[(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=o=>Z.codigo=o),onKeypress:a[2]||(a[2]=(...o)=>H.validaCodigo&&H.validaCodigo(...o)),class:"form-control","aria-describedby":"curp",placeholder:"CODIGO"},null,544),[[l.nr,Z.codigo]])])]),(0,s._)("div",u,[(0,s._)("div",v,[(0,s._)("div",m,[(0,s.wy)((0,s._)("select",{id:"select-model","onUpdate:modelValue":a[3]||(a[3]=o=>Z.categoria=o)},g,512),[[l.bM,Z.categoria]])])])])]),h,(0,s._)("div",A,[(0,s._)("div",w,[(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>Z.horas=o),onKeypress:a[5]||(a[5]=(...o)=>H.validaHoras&&H.validaHoras(...o)),class:"form-control","aria-describedby":"curp",placeholder:"HORAS"},null,544),[[l.nr,Z.horas]])])]),(0,s._)("div",f,[(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=o=>Z.consecutivo=o),onKeypress:a[7]||(a[7]=(...o)=>H.validaConsecutivo&&H.validaConsecutivo(...o)),class:"form-control","aria-describedby":"curp",placeholder:"CONSECUTIVO"},null,544),[[l.nr,Z.consecutivo]])])])]),(0,s._)("div",N,[(0,s._)("div",b,[(0,s._)("div",z,[(0,s._)("span",null,[E,(0,s._)("span",k,(0,e.zw)("SECCION"===Z.seccion?"-":Z.seccion),1)])])]),(0,s._)("div",O,[(0,s._)("div",I,[(0,s._)("span",null,[V,(0,s._)("span",D,(0,e.zw)(Z.codigo)+" "+(0,e.zw)(Z._codigo)+" "+(0,e.zw)(Z.categoria)+" "+(0,e.zw)(Z.horas)+" "+(0,e.zw)(Z.consecutivo),1)])])]),Z.valida?((0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",L,[(0,s._)("span",M,(0,e.zw)(o.msjError),1)])])):(0,s.kq)("",!0)]),(0,s._)("div",R,[(0,s._)("a",{class:"btn primary",onClick:a[8]||(a[8]=(...o)=>H.muestraModal&&H.muestraModal(...o))}," Guardar "),U])]),(0,s.Wm)(W,{titulo:"PLAZA",mensaje:"La plaza ha sido guardada"}),(0,s.Wm)(q)],64)}let H="SECCION",G="",P="##########",W=null,q="",x="",B=!1;const K=(0,s.RC)((()=>i.e(3).then(i.bind(i,5003)))),T=(0,s.RC)((()=>i.e(754).then(i.bind(i,4754)))),j=(0,s.RC)((()=>i.e(313).then(i.bind(i,4313)))),F=(0,s.RC)((()=>i.e(664).then(i.bind(i,664))));var Y={components:{input_seccion:K,miModal:T,myFooter:j,tituloBusqueda:F},data(){return{seccion:H,codigo:G,_codigo:P,categoria:W,horas:q,consecutivo:x,valida:B}},methods:{muestraModal(){$("#staticBackdrop2").modal("show")},limpia_codigo(){try{this._codigo=""}catch{}},validaCodigo(o){(this.codigo.length>=6||isNaN(parseInt(o.key)))&&o.preventDefault()},validaHoras(o){(this.horas.length>=3||isNaN(parseInt(o.key)))&&o.preventDefault()},validaConsecutivo(o){(this.consecutivo.length>=6||isNaN(parseInt(o.key)))&&o.preventDefault()}},watch:{codigo(){this.limpia_codigo()},categoria(){this.limpia_codigo()},horas(){this.limpia_codigo()},consecutivo(){this.limpia_codigo()}}},J=i(89);const Q=(0,J.Z)(Y,[["render",Z]]);var X=Q}}]);
//# sourceMappingURL=alta plaza.1c820e70.js.map