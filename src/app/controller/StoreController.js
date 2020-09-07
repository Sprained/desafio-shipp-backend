const fs = require('fs');
const csv = require('csv-parser');

const Store = require('../model/Store');
const log = require('../middleware/log');

module.exports = {
    async register(req, res) {
        let results = [];
        fs.createReadStream('./stores.csv').pipe(csv({
            mapHeaders: ({ header, index }) => header.replace(' ', '_')
        })).on('data', async (row) => {
            results.push(row)
        }).on('end', () => {
            results.forEach(async function (item, index) {
                await Store.create({
                    county: item.County,
                    license_number: item.License_Number,
                    operation_type: item.Operation_Type,
                    establishment_type: item.Establishment_Type,
                    entity_name: item.Entity_Name,
                    dba_name: item.DBA_Name,
                    street_number: item.Street_Number,
                    street_name: item.Street_Name,
                    city: item.City,
                    state: item.State,
                    zip_code: item.Zip_Code,
                    long: item.Location.slice(15, 25),
                    lat: item.Location.slice(-11, -2),
                })
            })
            console.log('Arquivos csv gravado com sucesso!');
        });

        return res.json({ message: 'Cadastro de dados realizados com sucesso!' });
    },
    async index(req, res) {
        const { location } = req.query;
        
        const lat = parseFloat(location.lat);
        const long = parseFloat(location.long);

        const stores = await Store.findAll();
        let arrId = [];

        stores.forEach(async function (item, index) {
            let calc = (
                6371 * Math.acos(Math.cos((lat * Math.PI / 180)) * Math.cos(item.lat * Math.PI / 180) * Math.cos((long * Math.PI / 180) - (item.long * Math.PI / 180)) + Math.sin(lat * Math.PI / 180) * Math.sin(item.lat * Math.PI / 180))
            )

            if (calc <= 6500) {
                arrId.push(item.id);
            }
        });

        const store = await Store.findAll({
            where: {
                id: arrId
            }
        });

        const retorno = res.json(store)

        await log(lat, long, retorno.statusCode, store.length);
        
        return retorno;
    }
}