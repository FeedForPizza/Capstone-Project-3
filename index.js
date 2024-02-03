import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
var header = "";
var data = ";"
var imgURL = "";
var altTxt = "";
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});
app.post("/create",(req,res)=>{
    header = req.body["header"];
    data = req.body["data"];
    imgURL = req.body["imgJPG"];
    altTxt = req.body["altText"];
    res.render("content.ejs",{
        header: header,
        data: data,
        imgJPG: imgURL,
        altText: altTxt,
    });
});
app.get("/readmore",(req,res)=>{
    res.render("content.ejs",{
        header: "The Remarkable Return of 136 Galápagos Tortoises to Their Natural Habitat",
        data: "The Galapagos National Park Directorate, in partnership with Galapagos Conservancy, successfully repatriated 136 juvenile tortoises to the Cinco Cerros area on Isabela Island’s Cerro Azul volcano. These brave tortoises, aged between 5 and 9 years, were returned to their natural habitat, the only place where populations from Sierra Negra and Cerro Azul volcanoes coexist.",
        imgJPG:"/images/antoine-h-c-Yuwa66k6Tng-unsplash-1200x800.jpg",
        altText: "Tortoise picture",
    });

});
app.get("/update",(req,res)=>{
    header = req.query.header;
    data = req.query.data;
    imgURL = req.query.imgJPG;
    altTxt = req.query.altText;
    
    res.render("update.ejs",{
        header: header,
        data: data,
        imgJPG: imgURL,
        altText: altTxt,
    });
});
app.post("/update",(req,res)=>{
    header = req.body["header"];
    data = req.body["data"];
    imgURL = req.body["imgJPG"];
    altTxt = req.body["altText"];
    console.log(header);
    res.render("content.ejs",{
        header: header,
        data: data,
        imgJPG: imgURL,
        altText: altTxt,
    });
});
app.get("/delete",(req,res)=>{
    header = req.query.header;
    data = req.query.data;
    imgURL = req.query.imgJPG;
    altTxt = req.query.altText;
    console.log(header);
    res.render("delete.ejs",{
        header: header,
        data: data,
        imgJPG: imgURL,
        altText: altTxt,
    });
});

app.get("/deleted",(req,res)=>{
    res.render("succesDelete.ejs");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });