import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {FileBlob, SpreadsheetFile, Workbook} from '@oai/artifact-tool';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../..');
const output=path.join(root,'outputs/pipeline-sheets-20261119');
const renders=path.join(here,'renders');
await fs.mkdir(output,{recursive:true});await fs.mkdir(renders,{recursive:true});
const data=JSON.parse(await fs.readFile(path.join(root,'data/pipeline-sheets.json'),'utf8'));
const stages=['Prospecto','Contactado','Reunión agendada','Propuesta enviada','Negociación','Cerrado ganado'];
const cutoff=new Date(`${data.cutoff}T00:00:00Z`);
const days=r=>Math.round((cutoff-new Date(`${r.ultimoContacto}T00:00:00Z`))/86400000);
const eligible=data.rows.filter(r=>r.prioridad==='Alta'&&days(r)>10&&!r.etapa.startsWith('Cerrado')).sort((a,b)=>b.valor-a.valor||a.id.localeCompare(b.id));
const totals=stages.map(stage=>({stage,total:data.rows.filter(r=>r.etapa===stage).reduce((n,r)=>n+r.valor,0)}));
const answers={cutoff:data.cutoff,total:data.rows.reduce((n,r)=>n+r.valor,0),active:data.rows.filter(r=>!r.etapa.startsWith('Cerrado')).reduce((n,r)=>n+r.valor,0),totals,urgent:eligible.map(r=>({id:r.id,empresa:r.empresa,valor:r.valor,dias:days(r)})),top3:eligible.slice(0,3).map(r=>r.id)};
assert.equal(answers.total,627000);assert.equal(answers.active,572000);assert.equal(eligible.length,4);assert.deepEqual(answers.top3,['D-008','D-002','D-005']);
const colors={ink:'#18263D',muted:'#526178',blue:'#285BEA',pale:'#E8EFFF',line:'#DAE1EC',amber:'#FFF0C2'};
const asDate=s=>new Date(`${s}T00:00:00Z`);
const headers=['Deal ID','Empresa','Industria','Etapa del Funnel','Valor Estimado (USD)','Fecha Último Contacto','Próximo Paso','Prioridad','Score (1-100)'];

function base(sheet,range){sheet.showGridLines=false;sheet.getRange(range).format={font:{name:'Arial',size:11,color:colors.ink},verticalAlignment:'center',rowHeight:25};}
function header(sheet,range){sheet.getRange(range).format={fill:colors.ink,font:{name:'Arial',size:11,bold:true,color:'#FFFFFF'},rowHeight:40,wrapText:true,horizontalAlignment:'center',verticalAlignment:'center',borders:{insideVertical:{style:'thin',color:'#FFFFFF'}}};}
function title(sheet,cell,text){sheet.getRange(cell).values=[[text]];sheet.getRange(cell).format.font={name:'Arial',size:16,bold:true,color:colors.ink};sheet.getRange(cell).format.rowHeight=34;}
function writePipeline(wb,solved=false){
 const sheet=wb.worksheets.add('Pipeline de Ventas');base(sheet,solved?'A1:L16':'A1:I16');
 sheet.getRange('A1:I1').values=[headers];
 sheet.getRange('A2:I11').values=data.rows.map(r=>[r.id,r.empresa,r.industria,r.etapa,r.valor,asDate(r.ultimoContacto),r.proximoPaso,r.prioridad,r.score]);
 const table=sheet.tables.add(solved?'A1:L11':'A1:I11',true,solved?'PipelineResuelto':'PipelinePractica');
 table.showFilterButton=true;
 const widths=[12,18,23,25,21,23,48,14,17,23,21,20];
 widths.slice(0,solved?12:9).forEach((w,i)=>sheet.getRangeByIndexes(0,i,16,1).format.columnWidth=w);
 sheet.getRange('A2:L11').format.rowHeight=48;sheet.getRange('C2:D11').format.wrapText=true;sheet.getRange('G2:G11').format.wrapText=true;
 sheet.getRange('E2:E11').setNumberFormat('"USD "#,##0');sheet.getRange('F2:F11').setNumberFormat('dd/mm/yyyy');sheet.getRange('I2:I11').setNumberFormat('0');
 sheet.getRange('A14').values=[['Fuente: '+data.source+' (archivo aportado).']];
 sheet.getRange('A15').values=[['Datos de práctica: alias de empresas y contactos omitidos. Valores y fechas del archivo de referencia.']];
 sheet.getRange('A14:I15').format.font={name:'Arial',size:10,color:colors.muted};
 sheet.freezePanes.freezeRows(1);sheet.freezePanes.freezeColumns(2);
 if(solved){
  sheet.getRange('J1:L1').values=[['Días sin contacto','Acción inmediata','Orden por valor']];
  sheet.getRange('J2').formulas=[['=IF(F2="","Sin fecha",IF(ISNUMBER(F2),IF(F2>\'Análisis\'!$B$4,"Fecha futura",\'Análisis\'!$B$4-F2),"Revisar fecha"))']];sheet.getRange('J2:J11').fillDown();
  sheet.getRange('K2').formulas=[['=IF(OR(D2="Cerrado ganado",D2="Cerrado perdido"),"Cerrado",IF(NOT(ISNUMBER(J2)),"Revisar fecha",IF(AND(H2="Alta",J2>10),"Sí","No")))']];sheet.getRange('K2:K11').fillDown();
  sheet.getRange('L2').formulas=[['=IF(K2="Sí",COUNTIFS($K$2:$K$11,"Sí",$E$2:$E$11,">"&E2)+COUNTIFS($K$2:K2,"Sí",$E$2:E2,E2),"")']];sheet.getRange('L2:L11').fillDown();
  sheet.getRange('J2:L11').setNumberFormat('0');
  sheet.getRange('J2:L11').format.horizontalAlignment='center';
  sheet.getRange('K2:K11').conditionalFormats.add('containsText',{text:'Sí',format:{fill:colors.amber,font:{bold:true,color:colors.ink}}});
 }
 header(sheet,solved?'A1:L1':'A1:I1');return sheet;
}

// Optional source inspection leaves the supplied workbook untouched.
if(process.argv[2]){
 const original=await SpreadsheetFile.importXlsx(await FileBlob.load(process.argv[2]));
 console.log((await original.inspect({kind:'sheet',include:'id,name',maxChars:1500})).ndjson);
 const sourcePreview=await original.render({sheetName:'Pipeline de Ventas',range:'F1:L6',scale:1,format:'png'});
 await fs.writeFile(path.join(renders,'source.png'),new Uint8Array(await sourcePreview.arrayBuffer()));
}

const practice=Workbook.create();const lab=practice.worksheets.add('Laboratorio');base(lab,'A1:H29');
lab.getRange('A1:H29').format.columnWidth=17;lab.getRange('A1:A29').format.columnWidth=27;
title(lab,'A2','Analiza tu pipeline con Gemini');
lab.getRange('A4:B4').values=[['Fecha de corte',cutoff]];lab.getRange('B4').setNumberFormat('dd/mm/yyyy');lab.getRange('B4').format.fill=colors.amber;
const lines=[
 [6,'1. Abre este archivo en Google Sheets y guárdalo como hoja de cálculo de Google.'],
 [8,'2. En Pipeline de Ventas, selecciona A1:I11 y abre Pregunta a Gemini.'],
 [10,'3. Analiza el valor total por etapa del funnel, en USD.'],
 [12,'4. Encuentra los deals de prioridad Alta con más de 10 días sin contacto.'],
 [14,'5. De esos deals abiertos, elige los tres de mayor valor y propone una acción.'],
 [16,'6. Crea un gráfico de barras con el valor por etapa y verifica su tabla de origen.'],
 [19,'Regla: acción inmediata = deal abierto, prioridad Alta y más de 10 días sin contacto.'],
 [21,'Calcula días al 13/03/2025, sin usar HOY(). Exactamente 10 días queda fuera.'],
 [23,'Separa el pipeline activo del valor cerrado ganado. No equivale a ingresos contables.'],
 [25,'Guarda el resumen y el gráfico. Si es una imagen, crea un gráfico nativo para reutilizarlo.'],
 [28,'Datos de práctica adaptados del archivo aportado. Empresas con alias y sin contactos.']
];
for(const [r,text]of lines){lab.getRange(`A${r}:H${r}`).merge();lab.getRange(`A${r}`).values=[[text]];lab.getRange(`A${r}:H${r}`).format.wrapText=true;lab.getRange(`A${r}:H${r}`).format.rowHeight=r===19?38:33;}
lab.getRange('A19:H23').format.font={name:'Arial',size:11,color:colors.muted};writePipeline(practice);practice.recalculate();
for(const [sheetName,range,name]of [['Laboratorio','A1:H29','practice-guide'],['Pipeline de Ventas','A1:F11','practice-data']]){const png=await practice.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(renders,`${name}.png`),new Uint8Array(await png.arrayBuffer()));}
await (await SpreadsheetFile.exportXlsx(practice)).save(path.join(output,'pipeline_practica.xlsx'));

const solved=Workbook.create();const analysis=solved.worksheets.add('Análisis');base(analysis,'A1:L37');analysis.tabColor=colors.ink;
analysis.getRange('A1:L37').format.columnWidth=7;
[18,12,18,18,16,34,12].forEach((w,i)=>analysis.getRangeByIndexes(0,i,37,1).format.columnWidth=w);
title(analysis,'A2','Pipeline y seguimiento comercial');
analysis.getRange('A4:B4').values=[['Fecha de corte',cutoff]];analysis.getRange('B4').setNumberFormat('dd/mm/yyyy');analysis.getRange('B4').format.fill=colors.amber;
analysis.getRange('D4:G4').merge();analysis.getRange('D4').values=[['Corte editable. Mantén 13/03/2025 para comparar la práctica.']];analysis.getRange('D4:G4').format.wrapText=true;analysis.getRange('D4:G4').format.rowHeight=38;
const pipeline=writePipeline(solved,true);
analysis.getRange('A7:C7').values=[['Etapa','Deals','Valor (USD)']];header(analysis,'A7:C7');
stages.forEach((stage,i)=>{const r=i+8;analysis.getRange(`A${r}`).values=[[stage]];analysis.getRange(`B${r}:C${r}`).formulas=[[`=COUNTIFS('Pipeline de Ventas'!$D$2:$D$11,A${r})`,`=SUMIFS('Pipeline de Ventas'!$E$2:$E$11,'Pipeline de Ventas'!$D$2:$D$11,A${r})`]];});
analysis.getRange('A8:A13').format.wrapText=true;analysis.getRange('A8:C13').format.rowHeight=39;
analysis.getRange('A14').values=[['Total del archivo']];analysis.getRange('B14:C14').formulas=[['=SUM(B8:B13)','=SUM(C8:C13)']];analysis.getRange('A14:C14').format.font={name:'Arial',size:11,bold:true,color:colors.ink};
analysis.getRange('A16').values=[['Pipeline activo']];analysis.getRange('C16').formulas=[['=SUMIFS(\'Pipeline de Ventas\'!$E$2:$E$11,\'Pipeline de Ventas\'!$D$2:$D$11,"<>Cerrado ganado",\'Pipeline de Ventas\'!$D$2:$D$11,"<>Cerrado perdido")']];
analysis.getRange('A17').values=[['Cerrado ganado']];analysis.getRange('C17').formulas=[['=C13']];analysis.getRange('C8:C17').setNumberFormat('"USD "#,##0');
const chart=analysis.charts.add('bar',[analysis.getRange('A7:A13'),analysis.getRange('C7:C13')]);chart.title='Valor por etapa (USD)';chart.titleTextStyle.typeface='Arial';chart.titleTextStyle.fontSize=15;chart.hasLegend=false;chart.series.items[0].fill=colors.blue;
chart.xAxis={axisType:'textAxis',textStyle:{typeface:'Arial',fontSize:10}};chart.yAxis={numberFormatCode:'"$"#,##0',numberFormatSourceLinked:false,textStyle:{typeface:'Arial',fontSize:11}};chart.setPosition('E7','L18');
analysis.getRange('A20').values=[['Deals urgentes']];analysis.getRange('D20').formulas=[['=COUNTIFS(\'Pipeline de Ventas\'!$K$2:$K$11,"Sí")']];analysis.getRange('D20').format.horizontalAlignment='center';
analysis.getRange('E20:L20').merge();analysis.getRange('E20').values=[['Abiertos, prioridad Alta y más de 10 días sin contacto.']];analysis.getRange('E20:L20').format.wrapText=true;analysis.getRange('A20:L20').format.rowHeight=35;
analysis.getRange('A22:G22').values=[['Orden','Deal ID','Empresa','Valor (USD)','Días sin contacto','Siguiente paso','Foco']];header(analysis,'A22:G22');
for(let r=23;r<=32;r++){
 const rank=r-22;analysis.getRange(`A${r}`).formulas=[[`=IF(${rank}<=$D$20,${rank},"")`]];
 for(const [target,source]of [['B','A'],['C','B'],['D','E'],['E','J'],['F','G']])analysis.getRange(`${target}${r}`).formulas=[[`=IF($A${r}="","",INDEX('Pipeline de Ventas'!$${source}$2:$${source}$11,MATCH($A${r},'Pipeline de Ventas'!$L$2:$L$11,0)))`]];
 analysis.getRange(`G${r}`).formulas=[[`=IF(A${r}="","",IF(A${r}<=3,"Top 3","Después"))`]];
}
analysis.getRange('D23:D32').setNumberFormat('"USD "#,##0');analysis.getRange('A23:G32').format.rowHeight=38;analysis.getRange('F23:F32').format.wrapText=true;
analysis.getRange('E23:E32').format.horizontalAlignment='center';
analysis.getRange('G23:G32').conditionalFormats.add('containsText',{text:'Top 3',format:{fill:colors.pale,font:{color:colors.blue,bold:true}}});
for(const [r,text]of [[35,'Pipeline activo excluye deals cerrados. El valor ganado no equivale a ingresos contables.'],[36,'Orden: valor descendente. En empates se conserva el orden de Deal ID del conjunto inicial.'],[37,'En Pipeline de Ventas, filtra Acción inmediata = Sí para revisar las filas originales.']]){analysis.getRange(`A${r}:L${r}`).merge();analysis.getRange(`A${r}`).values=[[text]];analysis.getRange(`A${r}:L${r}`).format.font={name:'Arial',size:10,color:colors.muted};}

// Verify calculations, eligibility boundaries and live sorting, then restore inputs.
solved.recalculate();
const scalar=(s,a)=>s.getRange(a).values[0][0];
assert.equal(scalar(analysis,'C14'),answers.total);assert.equal(scalar(analysis,'C16'),answers.active);assert.equal(scalar(analysis,'D20'),4);
assert.deepEqual(analysis.getRange('B23:B25').values.flat(),answers.top3);assert.equal(scalar(pipeline,'J7'),10);assert.equal(scalar(pipeline,'K7'),'No');
pipeline.getRange('E2').values=[[200000]];solved.recalculate();assert.equal(scalar(analysis,'B23'),'D-001');assert.equal(scalar(analysis,'C14'),782000);pipeline.getRange('E2').values=[[45000]];
analysis.getRange('B4').values=[[asDate('2025-03-14')]];solved.recalculate();assert.equal(scalar(analysis,'D20'),5);assert.equal(scalar(analysis,'B25'),'D-006');analysis.getRange('B4').values=[[cutoff]];
pipeline.getRange('F2').values=[[null]];solved.recalculate();assert.equal(scalar(pipeline,'J2'),'Sin fecha');assert.equal(scalar(analysis,'D20'),3);pipeline.getRange('F2').values=[[asDate(data.rows[0].ultimoContacto)]];
solved.recalculate();assert.equal(scalar(analysis,'C14'),627000);assert.deepEqual(analysis.getRange('B23:B25').values.flat(),answers.top3);
const errors=await solved.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},maxChars:1500});console.log(errors.ndjson);
console.log('Chart bindings:',chart.series.items.map(s=>({values:s.formula,categories:s.categoryFormula})));
for(const [sheetName,range,name]of [['Análisis','A1:L20','solution-summary'],['Análisis','A20:G28','solution-actions'],['Pipeline de Ventas','G1:L11','solution-data']]){const png=await solved.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(renders,`${name}.png`),new Uint8Array(await png.arrayBuffer()));}
await (await SpreadsheetFile.exportXlsx(solved)).save(path.join(output,'pipeline_solucion.xlsx'));
for(const name of ['pipeline_practica.xlsx.inspect.ndjson','pipeline_solucion.xlsx.inspect.ndjson'])await fs.rm(path.join(output,name),{force:true});
await fs.writeFile(path.join(root,'data/pipeline-sheets-respuestas.json'),JSON.stringify(answers,null,2)+'\n');
console.log(JSON.stringify(answers,null,2));
