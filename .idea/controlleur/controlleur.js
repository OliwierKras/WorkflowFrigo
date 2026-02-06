import XLSX from "xlsx";
import path from "path";
export async  function getproduit(req , res ){
    try {
        const filepath = path.resolve("../bdd1.xlsx") ;
        const fileread =  XLSX.read(filepath);
        const sheetname = fileread.SheetNames[0];
        const  sheet = fileread.Sheets[sheetname];
        const listealiments = XLSX.utils.sheet_to_json(sheet);
        res.json(aliments);
    }catch(err){
        res.status(500).json({ error: error.message });
    }
}