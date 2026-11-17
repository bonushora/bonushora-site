export type District = {
 id:string;
 pt:string;
 en:string;
 descriptionPt:string;
 descriptionEn:string;
 status:'planned'|'documentary';
 x?:number;
 y?:number;
 height:number;
 color:string;
};

export const districts:District[]=[
 {id:'lab',pt:'Laboratório',en:'Laboratory',
 descriptionPt:'Experimentos econômicos E01–E06.',
 descriptionEn:'Economic experiments E01–E06.',
 status:'planned',x:110,y:205,height:74,color:'#3987b5'},
 {id:'library',pt:'Biblioteca',en:'Library',
 descriptionPt:'Fontes científicas e documentação.',
 descriptionEn:'Scientific sources and documentation.',
 status:'documentary',x:345,y:135,height:83,color:'#479c86'},
 {id:'commerce',pt:'Comércio',en:'Commerce',
 descriptionPt:'Estudo da economia tradicional.',
 descriptionEn:'Study of the traditional economy.',
 status:'planned',x:595,y:205,height:60,color:'#bf9655'},
 {id:'community',pt:'Comunidade',en:'Community',
 descriptionPt:'Pesquisa sobre economia complementar.',
 descriptionEn:'Research on the complementary economy.',
 status:'planned',x:95,y:410,height:57,color:'#ae82b2'},
 {id:'observatory',pt:'Observatório',en:'Observatory',
 descriptionPt:'Indicadores e resultados científicos.',
 descriptionEn:'Scientific indicators and results.',
 status:'planned',x:340,y:445,height:95,color:'#5c88bd'},
 {id:'museum',pt:'Museu do Tempo',en:'Time Museum',
 descriptionPt:'Memória histórica e versões da pesquisa.',
 descriptionEn:'Research history and versions.',
 status:'documentary',x:595,y:420,height:76,color:'#b57f67'},
 {id:'council',pt:'Conselho',en:'Council',
 descriptionPt:'Governança e decisões documentadas.',
 descriptionEn:'Governance and documented decisions.',
 status:'documentary',x:755,y:315,height:70,color:'#738b98'}
];

