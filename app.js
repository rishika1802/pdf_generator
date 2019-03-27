const fs=require('fs');
const pdf=require('pdfkit'); 




    var doc=new pdf();
    doc.pipe(fs.createWriteStream('node.pdf'));
    doc.font('Times-Roman');
       doc.fontSize(48);


    doc.text('Rishika Roy\n Dept:Information Technology',100,100);
    doc.end();