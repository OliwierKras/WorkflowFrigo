import XLSX from "xlsx";
import path from "path";

export function getproduit(req, res) {
    try {
        const filePath = path.resolve("bdd1.xlsx");
        const workbook = XLSX.readFile(filePath, { cellDates: true });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        let aliments = XLSX.utils.sheet_to_json(sheet, { defval: "" });


        aliments = aliments.map(item => {
            if (item["date d'expiration "] instanceof Date) {
                item["date d'expiration "] = item["date d'expiration "]
                    .toISOString()
                    .split("T")[0];
            }
            return item;
        });

        res.json(aliments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Impossible de lire le fichier Excel", details: err.message });
    }
}
