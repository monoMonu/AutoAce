export default function SpecRow({specName, specValue}){
   return (
     <div className="specRow">
       <p className="specName">{specName}</p>
       <p className="specValue">{specValue}</p>
     </div>
   );
 }
 